const expenseModel =
    require("../models/expenseModel");

const {
    pool
} =
    require("../config/db");


const categories = [

    "transport",

    "accommodation",

    "activities",

    "meals",

    "other"

];


async function createExpense(
    req,
    res,
    next
) {

    try {

        const {
            category,
            amount
        } = req.body;


        if (
            !categories.includes(category)
        ) {

            return res.status(400).json({

                message:
                    "Invalid expense category"

            });
        }


        if (
            amount === undefined ||
            Number(amount) < 0
        ) {

            return res.status(400).json({

                message:
                    "Valid amount is required"

            });
        }


        const expense =
            await expenseModel.createExpense(

                req.params.id,

                req.user.id,

                req.body

            );


        if (!expense) {

            return res.status(404).json({

                message:
                    "Trip not found"

            });
        }


        res.status(201).json({

            message:
                "Expense added",

            expense

        });


    } catch (error) {

        next(error);

    }
}


async function getExpenses(
    req,
    res,
    next
) {

    try {

        const [trip] =
            await pool.execute(

                `SELECT id
                 FROM trips

                 WHERE
                    id = ?
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


        const expenses =
            await expenseModel.getTripExpenses(
                req.params.id
            );


        res.json(expenses);

    } catch (error) {

        next(error);

    }
}


module.exports = {
    createExpense,
    getExpenses
};