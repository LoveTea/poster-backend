require("dotenv").config();
const mongoose = require("mongoose");

const app = require("./app");

mongoose
    .connect(
        `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@postercluster.krjar.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
    )
    .then(() => {
        console.log("DB CONNECT SUCCESS");
    })
    .catch(() => {
        console.log("DB CONNECT ERROR");
    });

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`server started on ${PORT} port`);
});
