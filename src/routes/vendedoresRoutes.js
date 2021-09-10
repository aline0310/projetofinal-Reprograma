const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const vendaControllers = require("../controllers/vendedoresControllers");


router.get("/todos", vendaControllers.getTodosVendedores);
router.get("/:id", vendaControllers.getVendedorById);
router.post("/novovendedor", vendaControllers.getCriarNovoVendedor);
router.delete("/:id", vendaControllers.deleteVendedorById);
  

    

module.exports = router