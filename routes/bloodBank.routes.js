//  import the express module and create a router object using express.Router()
const express = require("express");
const router = express.Router();

// Define the HTTP routes for each of the imported functions from the BloodBank.controllers.js. 
// These methods take two arguments: the route path and the function to be executed when that route is requested.
const { newDonor, getDonor,deleteDonor,updateDonor } = require("../controllers/bloodBank.controllers");
router.post("/", newDonor);
router.get("/:id", getDonor)
router.delete("/:id", deleteDonor)
router.put("/:id",updateDonor)

module.exports = router;

