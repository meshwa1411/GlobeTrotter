const bcrypt = require("bcrypt");

const userModel =
    require("../models/userModel");


async function profile(req, res, next) {

    try {

        const user =
            await userModel.findById(
                req.user.id
            );


        if (!user) {

            return res.status(404).json({

                message:
                    "User not found"

            });
        }


        res.json(user);

    } catch (error) {

        next(error);

    }
}


async function updateProfile(
    req,
    res,
    next
) {

    try {

        const current =
            await userModel.findById(
                req.user.id
            );


        if (!current) {

            return res.status(404).json({

                message:
                    "User not found"

            });
        }


        const name =
            req.body.name ??
            current.name;


        const email =
            (
                req.body.email ??
                current.email
            )
            .trim()
            .toLowerCase();


        const existing =
            await userModel.findByEmail(
                email
            );


        if (
            existing &&
            existing.id !== req.user.id
        ) {

            return res.status(409).json({

                message:
                    "Email already in use"

            });
        }


        const user =
            await userModel.updateUser(

                req.user.id,

                name.trim(),

                email

            );


        res.json({

            message:
                "Profile updated",

            user

        });


    } catch (error) {

        next(error);

    }
}


async function deleteAccount(
    req,
    res,
    next
) {

    try {

        const {
            password
        } = req.body;


        if (!password) {

            return res.status(400).json({

                message:
                    "Password is required"

            });
        }


        const user =
            await userModel.findByEmail(
                req.user.email
            );


        if (!user) {

            return res.status(404).json({

                message:
                    "User not found"

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
                    "Incorrect password"

            });
        }


        await userModel.deleteUser(
            req.user.id
        );


        res.json({

            message:
                "Account deleted successfully"

        });


    } catch (error) {

        next(error);

    }
}


module.exports = {
    profile,
    updateProfile,
    deleteAccount
};