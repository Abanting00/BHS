const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
require('dotenv').config();

const API_PORT = process.env.API_PORT || 8000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// this is our MongoDB database
const dbRoute = process.env.DB_URI;

// connects our back end code with the database
mongoose.connect(dbRoute,{ useNewUrlParser: true });
let db = mongoose.connection;
db.once("open", () => console.log("connected to the database"));
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// Establish All API Routes
const userRoutes = require('./Routes/userRoutes');
const docRoutes = require('./Routes/docRoutes');
app.use("/api", userRoutes);
app.use("/api", docRoutes);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
