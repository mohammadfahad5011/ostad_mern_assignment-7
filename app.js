const express = require("express");
const app = express();
const router = require("./Src/routes/api");

// Security Middleware Import
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const hpp = require("hpp");
const cors = require("cors");
const mongoose = require("mongoose");

// Security Middleware Implement
app.use(cookieParser());
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(hpp());
app.use(bodyParser.json());
app.use(express.json());

// Request Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Catch-all route for undefined routes
// app.use((req, res) => {
//   res.status(404).send("Not Found");
// });

// API Routes
app.use("/api", router);

//database connection

const mongodbconnection = async () => {
  try {
    const connect = await mongoose.connect("mongodb://localhost:27017/E-shop");
    console.log("database connected succesfully");
  } catch (error) {
    console.log(error.massage);
  }
};

mongodbconnection();
// Handle undefined routes
app.use("*", (req, res) => {
  res.status(404).json({ message: "Route not found" });
});

module.exports = app;
