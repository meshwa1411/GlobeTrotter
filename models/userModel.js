const { pool } = require("../config/db");


async function findByEmail(email) {

    const [rows] = await pool.execute(
        "SELECT * FROM users WHERE email = ? LIMIT 1",
        [email]
    );

    return rows[0];
}


async function findById(id) {

    const [rows] = await pool.execute(

        `SELECT
            id,
            name,
            email,
            created_at,
            updated_at
         FROM users
         WHERE id = ?`,

        [id]
    );

    return rows[0];
}


async function createUser(
    name,
    email,
    passwordHash
) {

    const [result] = await pool.execute(

        `INSERT INTO users
        (name, email, password_hash)
        VALUES (?, ?, ?)`,

        [
            name,
            email,
            passwordHash
        ]
    );

    return findById(result.insertId);
}


async function updateUser(
    id,
    name,
    email
) {

    await pool.execute(

        `UPDATE users
         SET name = ?, email = ?
         WHERE id = ?`,

        [
            name,
            email,
            id
        ]
    );

    return findById(id);
}


async function deleteUser(id) {

    const [result] = await pool.execute(

        "DELETE FROM users WHERE id = ?",

        [id]
    );

    return result.affectedRows > 0;
}


module.exports = {
    findByEmail,
    findById,
    createUser,
    updateUser,
    deleteUser
};