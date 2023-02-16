//import the bloodbank donor schema
const BloodBank = require("../models/bloodBank.models");

// logic to collect donor data

// Creates a new blood donor record in the database
const newDonor = async (req, res) => {
    try {
        const {donorName, donorGender, donorAge, donorBloodGroup, donorRhFactor, donorAddress, donatedBefore} = req.body;
        if (!(donorName && donorGender  && donorAge && donorBloodGroup && donorRhFactor && donorAddress && donatedBefore)){
            return res.status(400).json({message: "input all fields"})
        }
        if (donorAge < 18){
            return res.status(400).json({message: "Oops sorry you're not eligible to donate"})
        }

        if (donorGender !== "Male" && donorGender !== "Female"){
            return res.status(400).json({message: "Please select either Male or Female"});
        }

        if (donatedBefore !== "Yes" && donatedBefore !== "No"){
            return res.status(400).json({message: "Please fill in Yes or No"})
        }
        const createDonor = await BloodBank.create({donorName,donorGender,donorAge,donorBloodGroup,donorRhFactor,donorAddress,donatedBefore})
        return res.status(201).json({message: "Donor created successfully", createDonor});
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({error: "Internal server error"})
    }
}

//  retrieve a list of blood donors from the database
const getDonor = async (req, res) => {
    try {
        const id = req.params.id
        const viewDonor = await BloodBank.findById(id)
        if (!viewDonor){
            return res.status(400).json({message: "Failed, user not found"})
        }
        return res.status(200).json({message: "Success, here is your data:", viewDonor})
        
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({error: "Internal server error"})
    }
}

// Deletes a blood donor record from the database, 
const deleteDonor = async (req, res) => {
    try {
        const id = req.params.id
        if (id.length < 24 || id.length > 24){
            return res.status(400).json({message: "Invalid"})
        }
        const viewDonor = await BloodBank.findById(id)
        if (!viewDonor){
            return res.status(400).json({message: "Failed, user not found"})
        }
        await BloodBank.findByIdAndDelete(id)
        return res.status(200).json({message: "Donor deleted successfully"})

    } catch (error) {
        console.log(error.message)
        return res.status(500).json({error: "Internal server error"})
    }

    
}

// Update an existing blood donor record in the database
const updateDonor = async (req, res) => {
    try { 
        const id = req.params.id
        const {donorName, donorGender, donorAge, donorBloodGroup, donorRhFactor, donorAddress, donatedBefore} = req.body;
        const donorUpdate = await BloodBank.findByIdAndUpdate(id,{donorName, donorGender, donorAge, donorBloodGroup, donorRhFactor, donorAddress, donatedBefore}, {new: true})
        return res.status(202).json({message: "Update completed successfully", donorUpdate})
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({error: "Internal server error"})
    }
}
module.exports = {
    newDonor,
    getDonor,
    deleteDonor,
    updateDonor,
}

