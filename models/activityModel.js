const { pool } =
    require("../config/db");


async function searchActivities({
    type,
    cost,
    duration
}) {

    let sql =
        "SELECT * FROM activities WHERE 1=1";

    const params = [];


    if (type) {

        sql +=
            " AND type = ?";

        params.push(type);
    }


    if (cost === "low") {

        sql +=
            " AND cost <= 50";

    } else if (cost === "medium") {

        sql +=
            " AND cost > 50 AND cost <= 150";

    } else if (cost === "high") {

        sql +=
            " AND cost > 150";
    }


    if (duration) {

        sql +=
            " AND duration_hours <= ?";

        params.push(
            Number(duration)
        );
    }


    sql +=
        " ORDER BY name ASC";


    const [rows] =
        await pool.execute(
            sql,
            params
        );


    return rows;
}


async function getActivityById(
    id
) {

    const [rows] =
        await pool.execute(

            "SELECT * FROM activities WHERE id = ?",

            [
                id
            ]
        );


    return rows[0];
}


module.exports = {
    searchActivities,
    getActivityById
};