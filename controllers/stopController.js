const stopModel =
    require("../models/stopModel");


async function createStop(
    req,
    res,
    next
) {

    try {

        const {
            city_id,
            stop_date
        } = req.body;


        if (
            !city_id ||
            !stop_date
        ) {

            return res.status(400).json({

                message:
                    "city_id and stop_date are required"

            });
        }


        const stop =
            await stopModel.createStop(

                req.params.id,

                req.user.id,

                req.body

            );


        if (!stop) {

            return res.status(404).json({

                message:
                    "Trip not found"

            });
        }


        res.status(201).json({

            message:
                "Stop added",

            stop

        });


    } catch (error) {

        next(error);

    }
}


async function getStops(
    req,
    res,
    next
) {

    try {

        const stops =
            await stopModel.getStops(

                req.params.id,

                req.user.id

            );


        if (stops === null) {

            return res.status(404).json({

                message:
                    "Trip not found"

            });
        }


        res.json(stops);

    } catch (error) {

        next(error);

    }
}


async function updateStop(
    req,
    res,
    next
) {

    try {

        const stop =
            await stopModel.updateStop(

                req.params.id,

                req.user.id,

                req.body

            );


        if (!stop) {

            return res.status(404).json({

                message:
                    "Stop not found"

            });
        }


        res.json({

            message:
                "Stop updated",

            stop

        });


    } catch (error) {

        next(error);

    }
}


async function deleteStop(
    req,
    res,
    next
) {

    try {

        const deleted =
            await stopModel.deleteStop(

                req.params.id,

                req.user.id

            );


        if (!deleted) {

            return res.status(404).json({

                message:
                    "Stop not found"

            });
        }


        res.json({

            message:
                "Stop deleted"

        });


    } catch (error) {

        next(error);

    }
}


module.exports = {

    createStop,

    getStops,

    updateStop,

    deleteStop

};