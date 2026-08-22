const {
    pool
} =
    require("../config/db");

const stopModel =
    require("../models/stopModel");


async function addActivity(
    req,
    res,
    next
) {

    try {

        const {
            activity_id
        } = req.body;


        if (!activity_id) {

            return res.status(400).json({

                message:
                    "activity_id is required"

            });
        }


        const stop =
            await stopModel.getStopById(
                req.params.id
            );


        if (
            !stop ||
            stop.user_id !== req.user.id
        ) {

            return res.status(404).json({

                message:
                    "Stop not found"

            });
        }


        const [activity] =
            await pool.execute(

                "SELECT id FROM activities WHERE id = ?",

                [
                    activity_id
                ]
            );


        if (!activity[0]) {

            return res.status(404).json({

                message:
                    "Activity not found"

            });
        }


        await pool.execute(

            `INSERT IGNORE INTO
             stop_activities
             (stop_id, activity_id)
             VALUES (?, ?)`,

            [
                req.params.id,
                activity_id
            ]
        );


        res.status(201).json({

            message:
                "Activity added to stop"

        });


    } catch (error) {

        next(error);

    }
}


async function removeActivity(
    req,
    res,
    next
) {

    try {

        const stop =
            await stopModel.getStopById(
                req.params.id
            );


        if (
            !stop ||
            stop.user_id !== req.user.id
        ) {

            return res.status(404).json({

                message:
                    "Stop not found"

            });
        }


        const [result] =
            await pool.execute(

                `DELETE FROM stop_activities

                 WHERE
                    stop_id = ?
                    AND activity_id = ?`,

                [
                    req.params.id,

                    req.params.activityId
                ]
            );


        if (!result.affectedRows) {

            return res.status(404).json({

                message:
                    "Activity assignment not found"

            });
        }


        res.json({

            message:
                "Activity removed"

        });


    } catch (error) {

        next(error);

    }
}


module.exports = {
    addActivity,
    removeActivity
};