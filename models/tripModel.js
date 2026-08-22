const { pool } =
    require("../config/db");


async function createTrip(
    userId,
    data
) {

    const [result] =
        await pool.execute(

            `INSERT INTO trips
            (
                user_id,
                title,
                description,
                start_date,
                end_date,
                budget,
                is_public
            )
            VALUES (?, ?, ?, ?, ?, ?, ?)`,

            [
                userId,

                data.title,

                data.description || null,

                data.start_date,

                data.end_date,

                data.budget ?? 0,

                data.is_public ? 1 : 0
            ]
        );


    return getTripById(
        result.insertId,
        userId
    );
}


async function getTripsByUser(
    userId
) {

    const [rows] =
        await pool.execute(

            `SELECT
                t.*,
                COUNT(ts.id) AS stop_count

             FROM trips t

             LEFT JOIN trip_stops ts
             ON ts.trip_id = t.id

             WHERE t.user_id = ?

             GROUP BY t.id

             ORDER BY
                t.start_date DESC`,

            [userId]
        );


    return rows;
}


async function getTripById(
    id,
    userId
) {

    const [rows] =
        await pool.execute(

            `SELECT
                t.*,
                u.name AS owner_name

             FROM trips t

             JOIN users u
             ON u.id = t.user_id

             WHERE
                t.id = ?
                AND t.user_id = ?`,

            [
                id,
                userId
            ]
        );


    return rows[0];
}


async function updateTrip(
    id,
    userId,
    data
) {

    const fields = [];

    const values = [];


    const allowed = [

        "title",

        "description",

        "start_date",

        "end_date",

        "budget",

        "is_public"

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
                field === "is_public"
                    ? data[field] ? 1 : 0
                    : data[field]
            );
        }
    }


    if (!fields.length) {

        return getTripById(
            id,
            userId
        );
    }


    values.push(
        id,
        userId
    );


    await pool.execute(

        `UPDATE trips

         SET ${fields.join(", ")}

         WHERE
            id = ?
            AND user_id = ?`,

        values

    );


    return getTripById(
        id,
        userId
    );
}


async function deleteTrip(
    id,
    userId
) {

    const [result] =
        await pool.execute(

            `DELETE FROM trips
             WHERE id = ?
             AND user_id = ?`,

            [
                id,
                userId
            ]
        );


    return result.affectedRows > 0;
}


module.exports = {
    createTrip,
    getTripsByUser,
    getTripById,
    updateTrip,
    deleteTrip
};