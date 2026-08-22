const express =
    require("express");

const authenticate =
    require("../middleware/authMiddleware");

const {
    createTrip,
    getTrips,
    getTrip,
    updateTrip,
    deleteTrip,
    shareTrip
} =
    require("../controllers/tripController");

const {
    getBudget
} =
    require("../controllers/budgetController");

const {
    calendar
} =
    require("../controllers/calendarController");


const router =
    express.Router();


router.use(authenticate);


router.post(
    "/",
    createTrip
);


router.get(
    "/",
    getTrips
);


router.get(
    "/:id/budget",
    getBudget
);


router.get(
    "/:id/calendar",
    calendar
);


router.post(
    "/:id/share",
    shareTrip
);


router.get(
    "/:id",
    getTrip
);


router.put(
    "/:id",
    updateTrip
);


router.delete(
    "/:id",
    deleteTrip
);


module.exports = router;