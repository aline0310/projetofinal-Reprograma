const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const sellersControllers = require("../controllers/sellersControllers");


router.get("/all", sellersControllers.getAllSellers);
router.get("/:id", sellersControllers.getSellersById);
router.post("/newseller", sellersControllers.CreateNewSeller);
router.patch("/:id",sellersControllers.updatePurchaseById)
router.delete("/:id", sellersControllers.deleteSellerById);
  

    

module.exports = router