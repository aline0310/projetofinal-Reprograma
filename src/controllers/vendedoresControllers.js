const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Vendedores = require("../models/vendedores");


const getTodosVendedores = async (req, res)=>{
    const vendedor = await Vendedores.find()
    res.status(200).json(vendedor)
};

const getVendedorById = async (req, res) => {
    const vendedor = await Vendedores.findById(req.params.id)
    res.status(200).json(vendedor)
};


const getCriarNovoVendedor = async (req, res) => {
    const vendedor = new Vendedores ({
        _id: new mongoose.Types.ObjectId(),
        nome: req.body.nome,
        categoria: req.body.categoria,
        segmento: req.body.segmento,
        telefone: req.body.telefone,
        cadastradoEm: req.body.criadoEm,
    });
    const vendedorJaExiste = await Vendedores.findOne({nome:req.body.nome})
    if(vendedorJaExiste){
        return res.status(409).json({error: "Vendedor ja cadastrado! Verifique os dados inseridos."})
    }
    try{
    const novoVendedor = await vendedor.save()
    res.status(201).json(novoVendedor);
    }catch(err){
        res.status.apply(400).json({message:err.message})
    }
};


const deleteVendedorById = async (req, res) => {
    const vendedor = await Vendedores.findById(req.params.id);
    if (vendedor == null) {
      return res.status(404).json({ message: "Vendedor não encontrado!" });
    }
    try {
      await vendedor.remove();
      res.status(200).json({ message: "Cadastro excluído com sucesso!!" });
    } catch (error) {
      res.status(500).json({ message: error.message});
    }
  };
  

module.exports = {getTodosVendedores, getCriarNovoVendedor, getVendedorById, deleteVendedorById}