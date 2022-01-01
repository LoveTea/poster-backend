const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");

app.use(express.json());
app.use(cors());

mongoose
    .connect(
        `mongodb+srv://tea:${process.env.DB_PASSWORD}@postercluster.krjar.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
    )
    .then(() => {
        console.log("DB CONNECT SUCCESS");
    })
    .catch(() => {
        console.log("DB CONNECT ERROR");
    });

app.use("/api/v1/users", userRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`server started on ${PORT} port`);
});
