const express = require("express");
const cors = require("cors");
const app = express();
const errorMiddleware = require("./middlewares/errorMiddleware");
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");

app.use(express.json());
app.use(cors());
app.use("/public", express.static("public"));

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/posts", postRoutes);

app.use(errorMiddleware);

module.exports = app;
