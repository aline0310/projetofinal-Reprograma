const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Produtos = require("../models/produtos");


const getTodosProdutos = async (req, res)=>{
    const produto = await Produtos.find()
    res.status(200).json(produto)
};

const getProdutoById = async (req, res) => {
    const produto = await Produtos.findById(req.params.id)
    res.status(200).json(produto)
};

const CriarNovoProduto = async (req, res) => {
    const product = new Produtos ({
        _id: new mongoose.Types.ObjectId(),
        nome: req.body.nome,
        categoria: req.body.categoria,
        segmento: req.body.segmento,
        cadastradoEm: req.body.criadoEm,
    });
    const produtoJaExiste = await Produtos.findOne({nome:req.body.nome})
    if(produtoJaExiste){
        return res.status(409).json({error: "Produto ja cadastrado! Verifique os dados inseridos."})
    }
    try{
    const novoProduto = await product.save()
    res.status(201).json(novoProduto);
    }catch(err){
        res.status.apply(400).json({message:err.message})
    }
};


const deleteProdutoById = async (req, res) => {
    const produto = await Produtos.findById(req.params.id);
    if (produto == null) {
      return res.status(404).json({ message: "Vendedor não encontrado!" });
    }
    try {
      await produto.remove();
      res.status(200).json({ message: "Cadastro excluído com sucesso!!" });
    } catch (error) {
      res.status(500).json({ message: error.message});
    }
  };

module.exports = {getTodosProdutos, getProdutoById, CriarNovoProduto, deleteProdutoById}