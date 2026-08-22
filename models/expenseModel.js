const {
    pool
} =
    require("../config/db");


async function createExpense(
    tripId,
    userId,
    data
) {

    const [trip] =
        await pool.execute(

            `SELECT id
             FROM trips
             WHERE id = ?
             AND user_id = ?`,

            [
                tripId,
                userId
            ]
        );


    if (!trip[0]) {

        return null;
    }


    const [result] =
        await pool.execute(

            `INSERT INTO expenses

            (
                trip_id,
                category,
                description,
                amount,
                expense_date
            )

            VALUES (?, ?, ?, ?, ?)`,

            [

                tripId,

                data.category,

                data.description || null,

                data.amount,

                data.expense_date || null

            ]
        );


    return getExpenseById(
        result.insertId
    );
}


async function getExpenseById(
    id
) {

    const [rows] =
        await pool.execute(

            "SELECT * FROM expenses WHERE id = ?",

            [
                id
            ]
        );


    return rows[0];
}


async function getTripExpenses(
    tripId
) {

    const [rows] =
        await pool.execute(

            `SELECT *
             FROM expenses

             WHERE trip_id = ?

             ORDER BY
                expense_date,
                id`,

            [
                tripId
            ]
        );


    return rows;
}


module.exports = {

    createExpense,

    getExpenseById,

    getTripExpenses

};