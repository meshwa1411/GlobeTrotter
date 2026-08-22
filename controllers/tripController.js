const crypto =
    require("crypto");

const {
    pool
} =
    require("../config/db");

const tripModel =
    require("../models/tripModel");


async function createTrip(
    req,
    res,
    next
) {

    try {

        const {
            title,
            start_date,
            end_date
        } = req.body;


        if (
            !title ||
            !start_date ||
            !end_date
        ) {

            return res.status(400).json({

                message:
                    "title, start_date and end_date are required"

            });
        }


        if (
            new Date(end_date)
            <
            new Date(start_date)
        ) {

            return res.status(400).json({

                message:
                    "End date cannot be before start date"

            });
        }


        const trip =
            await tripModel.createTrip(

                req.user.id,

                req.body

            );


        res.status(201).json({

            message:
                "Trip created",

            trip

        });


    } catch (error) {

        next(error);

    }
}


async function getTrips(
    req,
    res,
    next
) {

    try {

        const trips =
            await tripModel.getTripsByUser(
                req.user.id
            );


        res.json(trips);

    } catch (error) {

        next(error);

    }
}


async function getTrip(
    req,
    res,
    next
) {

    try {

        const trip =
            await tripModel.getTripById(

                req.params.id,

                req.user.id

            );


        if (!trip) {

            return res.status(404).json({

                message:
                    "Trip not found"

            });
        }


        res.json(trip);

    } catch (error) {

        next(error);

    }
}


async function updateTrip(
    req,
    res,
    next
) {

    try {

        const trip =
            await tripModel.updateTrip(

                req.params.id,

                req.user.id,

                req.body

            );


        if (!trip) {

            return res.status(404).json({

                message:
                    "Trip not found"

            });
        }


        res.json({

            message:
                "Trip updated",

            trip

        });


    } catch (error) {

        next(error);

    }
}


async function deleteTrip(
    req,
    res,
    next
) {

    try {

        const deleted =
            await tripModel.deleteTrip(

                req.params.id,

                req.user.id

            );


        if (!deleted) {

            return res.status(404).json({

                message:
                    "Trip not found"

            });
        }


        res.json({

            message:
                "Trip deleted successfully"

        });


    } catch (error) {

        next(error);

    }
}


async function shareTrip(
    req,
    res,
    next
) {

    try {

        const [trip] =
            await pool.execute(

                `SELECT id
                 FROM trips
                 WHERE id = ?
                 AND user_id = ?`,

                [
                    req.params.id,
                    req.user.id
                ]
            );


        if (!trip[0]) {

            return res.status(404).json({

                message:
                    "Trip not found"

            });
        }


        const shareId =
            crypto
                .randomBytes(16)
                .toString("hex");


        await pool.execute(

            `UPDATE trips

             SET
                share_id = ?,
                is_public = 1

             WHERE
                id = ?
                AND user_id = ?`,

            [
                shareId,

                req.params.id,

                req.user.id
            ]
        );


        res.json({

            message:
                "Trip shared publicly",

            shareId,

            publicPath:
                `/api/public/trips/${shareId}`

        });


    } catch (error) {

        next(error);

    }
}


async function getPublicTrip(
    req,
    res,
    next
) {

    try {

        const [trips] =
            await pool.execute(

                `SELECT
                    t.*,
                    u.name AS owner_name

                 FROM trips t

                 JOIN users u
                 ON u.id = t.user_id

                 WHERE
                    t.share_id = ?
                    AND t.is_public = 1`,

                [
                    req.params.shareId
                ]
            );


        if (!trips[0]) {

            return res.status(404).json({

                message:
                    "Public trip not found"

            });
        }


        const trip = trips[0];


        const [stops] =
            await pool.execute(

                `SELECT
                    ts.*,
                    c.name AS city_name,
                    c.country,
                    c.region

                 FROM trip_stops ts

                 JOIN cities c
                 ON c.id = ts.city_id

                 WHERE
                    ts.trip_id = ?

                 ORDER BY
                    ts.stop_date,
                    ts.stop_order`,

                [
                    trip.id
                ]
            );


        res.json({

            trip,

            stops

        });


    } catch (error) {

        next(error);

    }
}


module.exports = {

    createTrip,

    getTrips,

    getTrip,

    updateTrip,

    deleteTrip,

    shareTrip,

    getPublicTrip

};