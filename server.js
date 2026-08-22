require("dotenv").config();

const express =
    require("express");

const cors =
    require("cors");


const 
    testConnection
 =
    require("./config/db");


const {
    notFound,
    errorHandler
} =
    require("./middleware/errorMiddleware");


const authRoutes =
    require("./routes/authRoutes");

const userRoutes =
    require("./routes/userRoutes");

const tripRoutes =
    require("./routes/tripRoutes");

const stopRoutes =
    require("./routes/stopRoutes");

const cityRoutes =
    require("./routes/cityRoutes");

const activityRoutes =
    require("./routes/activityRoutes");

const expenseRoutes =
    require("./routes/expenseRoutes");

const publicRoutes =
    require("./routes/publicRoutes");

const dashboardRoutes =
    require("./routes/dashboardRoutes");


const app =
    express();


/* ==========================
   MIDDLEWARE
========================== */


app.use(

    cors({

        origin:
            process.env.FRONTEND_URL
            ||
            "http://localhost:5173"

    })

);


app.use(
    express.json()
);


/* ==========================
   HOME
========================== */


app.get(
    "/",
    (req, res) => {

        res.json({

            success: true,

            message:
                "Globetrotter API is running"

        });

    }
);


/* ==========================
   ROUTES
========================== */


app.use(
    "/api/auth",
    authRoutes
);


app.use(
    "/api/users",
    userRoutes
);


app.use(
    "/api/trips",
    tripRoutes
);


app.use(
    "/api",
    stopRoutes
);


app.use(
    "/api/cities",
    cityRoutes
);


app.use(
    "/api/activities",
    activityRoutes
);


app.use(
    "/api",
    expenseRoutes
);


app.use(
    "/api/public",
    publicRoutes
);


app.use(
    "/api/dashboard",
    dashboardRoutes
);


/* ==========================
   ERROR HANDLING
========================== */


app.use(notFound);

app.use(errorHandler);


/* ==========================
   START SERVER
========================== */


const PORT =
    Number(
        process.env.PORT || 5000
    );


async function startServer() {

    try {

        await testConnection();


        app.listen(
            PORT,

            () => {

                console.log(
                    `Globetrotter backend running at http://localhost:${PORT}`
                );

            }
        );


    } catch (error) {

        console.error(
            "Server startup failed:",
            error.message
        );

        process.exit(1);
    }
}


startServer();