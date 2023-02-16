//  imports the Mongoose library 
const mongoose = require("mongoose");

//  creates a new schema object using Mongoose's Schema class. 

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

//  creates a new Mongoose model for the schema, and attaches the schema to it.
const BloodBank = mongoose.model("BloodBank", bloodBankSchema);

//exports the BloodBank model so it can be used in other files in the application
module.exports =  BloodBank;

