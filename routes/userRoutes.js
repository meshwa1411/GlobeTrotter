const express = require("express");

const authenticate =
    require("../middleware/authMiddleware");


const {
    profile,
    updateProfile,
    deleteAccount
} =
    require("../controllers/userController");


const router =
    express.Router();


router.use(authenticate);


router.get(
    "/profile",
    profile
);


router.put(
    "/profile",
    updateProfile
);


router.delete(
    "/account",
    deleteAccount
);


module.exports = router;