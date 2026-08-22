const {
    pool
} =
    require("../config/db");


async function dashboard(
    req,
    res,
    next
) {

    try {

        const userId =
            req.user.id;


        const today =
            new Date()
                .toISOString()
                .slice(0, 10);


        // Recent Trips

        const [recentTrips] =
            await pool.execute(

                `SELECT
                    id,
                    title,
                    start_date,
                    end_date,
                    budget,
                    is_public

                 FROM trips

                 WHERE user_id = ?

                 ORDER BY
                    created_at DESC

                 LIMIT 5`,

                [
                    userId
                ]
            );


        // Upcoming Trips

        const [upcomingTrips] =
            await pool.execute(

                `SELECT
                    id,
                    title,
                    start_date,
                    end_date,
                    budget

                 FROM trips

                 WHERE
                    user_id = ?
                    AND end_date >= ?

                 ORDER BY
                    start_date ASC

                 LIMIT 5`,

                [
                    userId,
                    today
                ]
            );


        // Popular Cities

        const [popularCities] =
            await pool.execute(

                `SELECT
                    c.id,
                    c.name,
                    c.country,
                    c.region,

                    COUNT(ts.id)
                    AS usage_count

                 FROM cities c

                 LEFT JOIN trip_stops ts
                 ON ts.city_id = c.id

                 GROUP BY c.id

                 ORDER BY
                    usage_count DESC

                 LIMIT 5`
            );


        // Budget Highlights

        const [budgetHighlights] =
            await pool.execute(

                `SELECT

                    t.id,

                    t.title,

                    t.budget,

                    COALESCE(
                        SUM(e.amount),
                        0
                    ) AS expenses

                 FROM trips t

                 LEFT JOIN expenses e
                 ON e.trip_id = t.id

                 WHERE
                    t.user_id = ?

                 GROUP BY t.id

                 ORDER BY
                    expenses DESC

                 LIMIT 5`,

                [
                    userId
                ]
            );


        const highlights =
            budgetHighlights.map(
                item => ({

                    ...item,

                    remaining:
                        Number(item.budget)
                        -
                        Number(item.expenses),

                    overBudget:
                        Number(item.expenses)
                        >
                        Number(item.budget)

                })
            );


        res.json({

            recentTrips,

            upcomingTrips,

            popularCities,

            budgetHighlights:
                highlights

        });


    } catch (error) {

        next(error);

    }
}


module.exports = {
    dashboard
};