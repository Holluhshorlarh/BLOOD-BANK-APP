// importing and calling my dotenv module to help house my environment variables
require("dotenv").config()

// import the express module
const express = require("express");

// create an instance of the server
const app = express();

// middleware
app.use(express.json());

// import router 
const BloodBankRouter = require("./routes/bloodBank.routes");

//import my database connection process 
const dbConnect = require("./config/db");
dbConnect();

// define home route
app.get("/", (req, res) => {
   res.status(200).send("<h1>Welcome to the blood-bank home-page</h1>");
});

app.use("/api/v1", BloodBankRouter);

// listen to the server
const port = process.env.PORT
app.listen(port, function () {
    console.log("Server is live");
});


