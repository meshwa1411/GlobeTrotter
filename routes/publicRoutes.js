const express =
    require("express");


const {
    getPublicTrip
} =
    require("../controllers/tripController");


const router =
    express.Router();


router.get(
    "/trips/:shareId",
    getPublicTrip
);


module.exports = router;