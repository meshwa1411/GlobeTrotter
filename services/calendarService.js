const {
    pool
} =
    require("../config/db");


async function getCalendar(
    tripId,
    userId
) {

    const [trips] =
        await pool.execute(

            `SELECT
                id,
                title

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


    const [rows] =
        await pool.execute(

            `SELECT

                ts.id AS stop_id,

                ts.stop_date,

                ts.end_date,

                ts.stop_order,

                c.id AS city_id,

                c.name AS city_name,

                c.country,

                c.region,

                a.id AS activity_id,

                a.name AS activity_name,

                a.type AS activity_type,

                a.duration_hours,

                a.cost AS activity_cost

             FROM trip_stops ts

             JOIN cities c
             ON c.id = ts.city_id

             LEFT JOIN stop_activities sa
             ON sa.stop_id = ts.id

             LEFT JOIN activities a
             ON a.id = sa.activity_id

             WHERE
                ts.trip_id = ?

             ORDER BY
                ts.stop_date,
                ts.stop_order`,

            [
                tripId
            ]
        );


    const grouped = {};


    for (
        const row of rows
    ) {

        const date =
            new Date(
                row.stop_date
            )
            .toISOString()
            .slice(0, 10);


        if (!grouped[date]) {

            grouped[date] = [];
        }


        let stop =
            grouped[date]
                .find(
                    item =>
                        item.stopId ===
                        row.stop_id
                );


        if (!stop) {

            stop = {

                stopId:
                    row.stop_id,

                city: {

                    id:
                        row.city_id,

                    name:
                        row.city_name,

                    country:
                        row.country,

                    region:
                        row.region

                },

                startDate:
                    row.stop_date,

                endDate:
                    row.end_date,

                activities: []

            };


            grouped[date].push(stop);
        }


        if (row.activity_id) {

            stop.activities.push({

                id:
                    row.activity_id,

                name:
                    row.activity_name,

                type:
                    row.activity_type,

                durationHours:
                    row.duration_hours,

                cost:
                    row.activity_cost

            });
        }
    }


    return {

        trip:
            trips[0],

        calendar:
            Object.entries(grouped)
                .map(
                    ([date, stops]) => ({

                        date,

                        stops

                    })
                )

    };
}


module.exports = {
    getCalendar
};