const express =
    require("express");

const authenticate =
    require("../middleware/authMiddleware");


const {
    createStop,
    getStops,
    updateStop,
    deleteStop
} =
    require("../controllers/stopController");


const {
    addActivity,
    removeActivity
} =
    require("../controllers/stopActivityController");


const router =
    express.Router();


router.use(authenticate);


router.post(
    "/trips/:id/stops",
    createStop
);


router.get(
    "/trips/:id/stops",
    getStops
);


router.put(
    "/stops/:id",
    updateStop
);


router.delete(
    "/stops/:id",
    deleteStop
);


router.post(
    "/stops/:id/activities",
    addActivity
);


router.delete(
    "/stops/:id/activities/:activityId",
    removeActivity
);


module.exports = router;