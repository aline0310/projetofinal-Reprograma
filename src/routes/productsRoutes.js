const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const productsControllers = require("../controllers/productsControllers");


router.get("/all", productsControllers.getAllProducts);
router.get("/name", productsControllers.getProductsByName);
router.get("/sellers", productsControllers.getPurchaseBySeller)
router.get("/:id", productsControllers.getProductById);

router.post("/newproduct", productsControllers.CreateNewProduct);

router.patch("/:id", productsControllers.updateProductById)

router.delete("/:id", productsControllers.deleteProductById);

  

module.exports = router