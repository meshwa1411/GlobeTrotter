const { pool } =
    require("../config/db");


async function searchCities({
    search,
    country,
    region
}) {

    let sql =
        "SELECT * FROM cities WHERE 1=1";

    const params = [];


    if (search) {

        sql +=
            ` AND
            (
                name LIKE ?
                OR country LIKE ?
                OR region LIKE ?
            )`;

        const value =
            `%${search}%`;

        params.push(
            value,
            value,
            value
        );
    }


    if (country) {

        sql +=
            " AND country LIKE ?";

        params.push(
            `%${country}%`
        );
    }


    if (region) {

        sql +=
            " AND region LIKE ?";

        params.push(
            `%${region}%`
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


async function getCityById(
    id
) {

    const [rows] =
        await pool.execute(

            "SELECT * FROM cities WHERE id = ?",

            [
                id
            ]
        );


    return rows[0];
}


module.exports = {
    searchCities,
    getCityById
};