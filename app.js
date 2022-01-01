const express = require("express");
const cors = require("cors");
const app = express();
const errorMiddleware = require("./middlewares/errorMiddleware");
const userRoutes = require("./routes/userRoutes");

app.use(express.json());
app.use(cors());
app.use("/api/v1/users", userRoutes);

app.use(errorMiddleware);

module.exports = app;
