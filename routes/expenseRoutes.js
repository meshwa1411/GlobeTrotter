const express =
    require("express");

const authenticate =
    require("../middleware/authMiddleware");


const {
    createExpense,
    getExpenses
} =
    require("../controllers/expenseController");


const router =
    express.Router();


router.use(authenticate);


router.post(
    "/trips/:id/expenses",
    createExpense
);


router.get(
    "/trips/:id/expenses",
    getExpenses
);


module.exports = router;