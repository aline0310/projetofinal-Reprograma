const express = require("express");
const router = express.Router();
const mongoose = require("mongoose")
const purchaseController = require("../controllers/purchaseControllers");



router.get("/all", purchaseController.getAllPurchase);
router.get("/:id", purchaseController.getPurchaseById);

router.post("/newpurchase", purchaseController.CreateNewPurchase);

router.patch("/:id", purchaseController.updatePurchaseById)

router.delete("/:id", purchaseController.deletePurchaseById )





module.exports = router; 