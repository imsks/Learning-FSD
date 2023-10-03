const express = require("express")
const router = express.Router()
const baseController = require("../controllers")

// Define the root route
router.get("/", baseController.checkAPIStatus) // Get all
router.get("/:id", baseController.checkAPIStatus) // Get one by id
router.post("/", baseController.checkAPIStatus) // Add
router.patch("/", baseController.checkAPIStatus)
router.delete("/", baseController.checkAPIStatus)
router.put("/", baseController.checkAPIStatus)

module.exports = router
