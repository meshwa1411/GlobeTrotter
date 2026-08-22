const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

const userModel = require("../models/userModel");


function createToken(user) {

    return jwt.sign(

        {
            id: user.id,
            email: user.email
        },

        process.env.JWT_SECRET,

        {
            expiresIn:
                process.env.JWT_EXPIRES_IN || "7d"
        }
    );
}


async function register(req, res, next) {

    try {

        const {
            name,
            email,
            password
        } = req.body;


        if (!name || !email || !password) {

            return res.status(400).json({

                message:
                    "name, email and password are required"

            });
        }


        if (password.length < 6) {

            return res.status(400).json({

                message:
                    "Password must contain at least 6 characters"

            });
        }


        const normalizedEmail =
            email.trim().toLowerCase();


        const existing =
            await userModel.findByEmail(
                normalizedEmail
            );


        if (existing) {

            return res.status(409).json({

                message:
                    "Email already registered"

            });
        }


        const passwordHash =
            await bcrypt.hash(
                password,
                10
            );


        const user =
            await userModel.createUser(

                name.trim(),

                normalizedEmail,

                passwordHash

            );


        const token =
            createToken(user);


        res.status(201).json({

            message:
                "Registration successful",

            token,

            user

        });


    } catch (error) {

        next(error);

    }
}


async function login(req, res, next) {

    try {

        const {
            email,
            password
        } = req.body;


        if (!email || !password) {

            return res.status(400).json({

                message:
                    "Email and password are required"

            });
        }


        const user =
            await userModel.findByEmail(
                email.trim().toLowerCase()
            );


        if (!user) {

            return res.status(401).json({

                message:
                    "Invalid email or password"

            });
        }


        const valid =
            await bcrypt.compare(
                password,
                user.password_hash
            );


        if (!valid) {

            return res.status(401).json({

                message:
                    "Invalid email or password"

            });
        }


        const safeUser =
            await userModel.findById(
                user.id
            );


        const token =
            createToken(safeUser);


        res.json({

            message:
                "Login successful",

            token,

            user: safeUser

        });


    } catch (error) {

        next(error);

    }
}


module.exports = {
    register,
    login
};