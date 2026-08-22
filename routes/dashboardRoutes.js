const express =
    require("express");

const authenticate =
    require("../middleware/authMiddleware");


const {
    dashboard
} =
    require("../controllers/dashboardController");


const router =
    express.Router();


router.get(
    "/",
    authenticate,
    dashboard
);


module.exports = router;