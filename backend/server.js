const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const jwt = require('jsonwebtoken');
require('dotenv').config();

const API_PORT = process.env.API_PORT || 8000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// For user Validation for jwt token
validateUser = (req, res, next) => {
	let token = req.headers.authorization;

	// Make sure that authorization type Bearer
	if(token == null || token.split(' ')[0] != 'Bearer')
		return  res.json({success: false, message: 'Invalid Authorization'});

	// Verify that the person accessing the api is a valid user based on their token
	jwt.verify(token.split(' ')[1], process.env.SECRET, (err, decoded) => {
	    if (err) {
	      res.json({success: false, error: err.message});
	    }else{
	      // add user id to request
	      req.body.userId = decoded.id;
	      next();
	    }
	  });
}

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
const historyRoutes = require('./Routes/historyRoutes');
const tabooRoutes = require('./Routes/tabooRoutes');

app.use("/api", userRoutes);
app.use("/api", validateUser, docRoutes);
app.use("/api", validateUser, historyRoutes);
app.use("/api", validateUser, tabooRoutes);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
