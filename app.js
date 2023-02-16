// imports and calls the dotenv module which is used to load environment variables from the .env file
require("dotenv").config()

// import the express module
const express = require("express");

// create an instance of the express application
const app = express();

// middleware which parses incoming JSON payloads and makes the resulting data available on the req.body
app.use(express.json());

// import the bloodBankRouter. This router will define the routes for the application and handle incoming requests.
const BloodBankRouter = require("./routes/bloodBank.routes");

//import the dbConnect function from the db.js file in the config folder and calls it to connect to the MongoDB database. 
const dbConnect = require("./config/db");
dbConnect();

// Basic route for the application homepage. The route is a GET request to the route URL "/" send html home-page res back
app.get("/", (req, res) => {
   res.status(200).send("<h1>Welcome to the blood-bank home-page</h1>");
});

// Router to handle all routes that start with /api/v1.  (mounted route gotten from bloodBank.routes.js)
app.use("/api/v1", BloodBankRouter);

// starts and listen to the server on the specified port
const port = process.env.PORT
app.listen(port, function () {
    console.log("Server is live");
});


