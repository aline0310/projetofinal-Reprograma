const express = require("express");
const router = express.Router()
const mongoose = require("mongoose")
const costumersController = require("../controllers/costumersControllers");


router.get("/all", costumersController.getAllCostumers);
router.get("/:id", costumersController.getCostumerById);
router.post("/newcostumer", costumersController.CreateNewCostumer);
router.patch("/:id", costumersController.updateCostumerById)
router.delete("/:id", costumersController.deleteCostumerById)





module.exports = router;