const activityModel =
    require("../models/activityModel");


async function getActivities(
    req,
    res,
    next
) {

    try {

        const activities =
            await activityModel.searchActivities(
                req.query
            );


        res.json(activities);

    } catch (error) {

        next(error);

    }
}


async function getActivity(
    req,
    res,
    next
) {

    try {

        const activity =
            await activityModel.getActivityById(
                req.params.id
            );


        if (!activity) {

            return res.status(404).json({

                message:
                    "Activity not found"

            });
        }


        res.json(activity);

    } catch (error) {

        next(error);

    }
}


module.exports = {
    getActivities,
    getActivity
};