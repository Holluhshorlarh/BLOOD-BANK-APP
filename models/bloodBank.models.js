// import mongoose model 
const mongoose = require("mongoose");

// create variable for the schema 

const bloodBankSchema = new mongoose.Schema({
    donorName: String,
    donorGender: {
        type: String,
        enum: ["Male", "Female"]
    },
    donorAge: Number,
    donorBloodGroup: String,
    donorRhFactor: String,
    donorAddress: String,
    donatedBefore: {
        type: String,
        enum: ['Yes', 'No'],
    }
},
{timestamps: true})

// Attaching the schema to the model. Attach bloodBankSchema to BloodBank model
const BloodBank = mongoose.model("BloodBank", bloodBankSchema);

//export schema to blood bank controller
module.exports =  BloodBank;

