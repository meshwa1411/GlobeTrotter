const { pool } =
    require("../config/db");


async function tripBelongsToUser(
    tripId,
    userId
) {

    const [rows] =
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


    return !!rows[0];
}


async function createStop(
    tripId,
    userId,
    data
) {

    if (
        !(await tripBelongsToUser(
            tripId,
            userId
        ))
    ) {

        return null;
    }


    const [result] =
        await pool.execute(

            `INSERT INTO trip_stops

            (
                trip_id,
                city_id,
                stop_date,
                end_date,
                transport,
                accommodation,
                notes,
                stop_order
            )

            VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,

            [
                tripId,

                data.city_id,

                data.stop_date,

                data.end_date ||
                    data.stop_date,

                data.transport ||
                    null,

                data.accommodation ||
                    null,

                data.notes ||
                    null,

                data.stop_order ||
                    1
            ]
        );


    return getStopById(
        result.insertId
    );
}


async function getStops(
    tripId,
    userId
) {

    if (
        !(await tripBelongsToUser(
            tripId,
            userId
        ))
    ) {

        return null;
    }


    const [rows] =
        await pool.execute(

            `SELECT
                ts.*,

                c.name AS city_name,

                c.country,

                c.region

             FROM trip_stops ts

             JOIN cities c
             ON c.id = ts.city_id

             WHERE
                ts.trip_id = ?

             ORDER BY
                ts.stop_date,
                ts.stop_order`,

            [
                tripId
            ]
        );


    return rows;
}


async function getStopById(
    id
) {

    const [rows] =
        await pool.execute(

            `SELECT
                ts.*,

                c.name AS city_name,

                c.country,

                c.region,

                t.user_id

             FROM trip_stops ts

             JOIN cities c
             ON c.id = ts.city_id

             JOIN trips t
             ON t.id = ts.trip_id

             WHERE ts.id = ?`,

            [
                id
            ]
        );


    return rows[0];
}


async function updateStop(
    id,
    userId,
    data
) {

    const current =
        await getStopById(id);


    if (
        !current ||
        current.user_id !== userId
    ) {

        return null;
    }


    const fields = [];

    const values = [];


    const allowed = [

        "city_id",

        "stop_date",

        "end_date",

        "transport",

        "accommodation",

        "notes",

        "stop_order"

    ];


    for (
        const field of allowed
    ) {

        if (
            data[field] !== undefined
        ) {

            fields.push(
                `${field} = ?`
            );

            values.push(
                data[field]
            );
        }
    }


    if (fields.length) {

        values.push(id);


        await pool.execute(

            `UPDATE trip_stops

             SET ${fields.join(", ")}

             WHERE id = ?`,

            values

        );
    }


    return getStopById(id);
}


async function deleteStop(
    id,
    userId
) {

    const stop =
        await getStopById(id);


    if (
        !stop ||
        stop.user_id !== userId
    ) {

        return false;
    }


    const [result] =
        await pool.execute(

            "DELETE FROM trip_stops WHERE id = ?",

            [
                id
            ]
        );


    return result.affectedRows > 0;
}


module.exports = {

    createStop,

    getStops,

    getStopById,

    updateStop,

    deleteStop

};