const {
    getCalendar
} =
    require("../services/calendarService");


async function calendar(
    req,
    res,
    next
) {

    try {

        const result =
            await getCalendar(

                req.params.id,

                req.user.id

            );


        if (!result) {

            return res.status(404).json({

                message:
                    "Trip not found"

            });
        }


        res.json(result);

    } catch (error) {

        next(error);

    }
}


module.exports = {
    calendar
};