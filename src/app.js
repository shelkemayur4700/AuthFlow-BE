const express = require("express");
const userRouter = require("./app/routes/user.Routes");
const authRoutes = require("./app/routes/auth.routes");
const app = express();
const cors = require("cors");
const { errorMiddleware } = require("./app/middleware");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




app.use("/auth", authRoutes);
app.use("/user", userRouter);

// error errorMiddleware to handle errors
app.use(errorMiddleware);
module.exports = app;
