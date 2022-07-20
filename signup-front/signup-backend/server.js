const express = require("express");
const app = express();

const mongoose = require("mongoose");
const dotenv = require("dotenv");

const routesUrls = require("./routes/routes");
const loginUrls = require("./routes/loginRoutes");

const cors = require("cors");

dotenv.config(); //to process env
mongoose.connect(process.env.DATABASE_ACCESS, () => {
    console.log("DataBase connected");
});

app.use(express.json()); //body parser to app
app.use(cors()); //allowed to pass requests from different origins

app.use("/app", routesUrls);
app.use("/app", loginUrls);

app.listen(4000, () => console.log("Server is running"));
