const {
    calculateTripBudget
} =
    require("../services/budgetService");


async function getBudget(
    req,
    res,
    next
) {

    try {

        const budget =
            await calculateTripBudget(

                req.params.id,

                req.user.id

            );


        if (!budget) {

            return res.status(404).json({

                message:
                    "Trip not found"

            });
        }


        res.json(budget);

    } catch (error) {

        next(error);

    }
}


module.exports = {
    getBudget
};