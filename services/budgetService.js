const {
    pool
} =
    require("../config/db");


async function calculateTripBudget(
    tripId,
    userId
) {

    const [trips] =
        await pool.execute(

            `SELECT
                id,
                budget,
                start_date,
                end_date

             FROM trips

             WHERE
                id = ?
                AND user_id = ?`,

            [
                tripId,
                userId
            ]
        );


    if (!trips[0]) {

        return null;
    }


    const trip = trips[0];


    const [expenses] =
        await pool.execute(

            `SELECT
                category,
                SUM(amount) AS amount

             FROM expenses

             WHERE trip_id = ?

             GROUP BY category`,

            [
                tripId
            ]
        );


    const breakdown = {

        transport: 0,

        accommodation: 0,

        activities: 0,

        meals: 0,

        other: 0

    };


    for (
        const expense of expenses
    ) {

        if (
            breakdown[
                expense.category
            ] !== undefined
        ) {

            breakdown[
                expense.category
            ] =
                Number(
                    expense.amount
                );
        }
    }


    const [activities] =
        await pool.execute(

            `SELECT
                SUM(a.cost) AS total

             FROM stop_activities sa

             JOIN activities a
             ON a.id = sa.activity_id

             JOIN trip_stops ts
             ON ts.id = sa.stop_id

             WHERE ts.trip_id = ?`,

            [
                tripId
            ]
        );


    breakdown.activities +=
        Number(
            activities[0].total || 0
        );


    const totalCost =

        breakdown.transport +

        breakdown.accommodation +

        breakdown.activities +

        breakdown.meals +

        breakdown.other;


    const start =
        new Date(
            trip.start_date
        );


    const end =
        new Date(
            trip.end_date
        );


    const days =
        Math.max(

            1,

            Math.ceil(
                (end - start)
                /
                86400000
            ) + 1

        );


    const budget =
        Number(trip.budget);


    return {

        tripId,

        budget,

        totalCost,

        dailyAverage:
            Number(
                (
                    totalCost / days
                ).toFixed(2)
            ),

        categoryBreakdown:
            breakdown,

        overBudget:
            totalCost > budget,

        remainingBudget:
            Number(
                (
                    budget - totalCost
                ).toFixed(2)
            ),

        days

    };
}


module.exports = {
    calculateTripBudget
};