const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const produtosControllers = require("../controllers/produtosControllers");


router.get("/todos", produtosControllers.getTodosProdutos);
router.get("/:id", produtosControllers.getProdutoById);
router.post("/novoproduto", produtosControllers.CriarNovoProduto);
router.delete("/:id", produtosControllers.deleteProdutoById )

  

module.exports = router