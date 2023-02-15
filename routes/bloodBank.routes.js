// import and call the express module
const express = require("express");
const router = express.Router();

// import donor data collection logic
const { newDonor, getDonor,deleteDonor,updateDonor } = require("../controllers/bloodBank.controllers");
router.post("/", newDonor);
router.get("/:id", getDonor)
router.delete("/:id", deleteDonor)
router.put("/:id",updateDonor)

module.exports = router;

