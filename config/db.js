// import mongoose module
const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

// create a variable to connect to the database

const dbConnect = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to database Successfully");
    } catch (error) {
        console.log(error.message)
    }
}

// export my database connection process to app.js
module.exports = dbConnect;

