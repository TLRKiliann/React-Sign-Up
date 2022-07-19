const express = require("express");
const app = express();

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routesUrls = require("./routes/routes");
const cors = require("cors");


dotenv.config();

mongoose.connect(process.env.DATABASE_ACCESS, () => {
    console.log("DataBase connected");
})

app.use(express.json()); //body parser to app
app.use(cors());
app.use("/app", routesUrls);
app.listen(4000, () => console.log("Server is running"));

