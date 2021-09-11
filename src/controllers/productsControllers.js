const express = require("express");
const mongoose = require("mongoose");
const Products = require("../models/products");


const getAllProducts = async (req, res)=>{
    const product = await Products.find()
    res.status(200).json(product)
};

const getProductById = async (req, res) => {
    const product = await Products.findById(req.params.id)
    res.status(200).json(product)
};

const getProductsByName = async (req, res) => {
  const product = await Products.findByName(req.params.name)
  res.status(200).json(product);
};

const getPurchaseBySeller = async (req, res) => {
  const product = await Products.findBySeller(req.params.seller)
  res.status(200).json(product);
};

const CreateNewProduct = async (req, res) => {
    const product = new Products ({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        category: req.body.category,
        segment: req.body.segment,
        description:req.body.description,
        price: req.body.price,
        registeredIn: req.body.registeredIn,
    });
    const productAlredyExists = await Products.findOne({nome:req.body.name})
    if(productAlredyExists){
        return res.status(409).json({error: "Produto ja cadastrado! Verifique os dados inseridos."})
    }
    try{
    const newProduct = await product.save()
    res.status(201).json(newProduct);
    }catch(err){
        res.status.apply(400).json({message:err.message})
    }
};

const updateProductById = async (req, res) => {
  try {
    const product = await Products.findById(req.params.id);

    if (product == null) {
      return res.status(404).json({ message: "Cliente não encontrado! Verifique os dados inseridos." });
    }
    if (req.body.name != null) {
      product.name = req.body.nome;
    }
    if (req.body.category != null) {
      product.category = req.body.category;
    }
    if (req.body.segment != null) {
      product.segment = req.body.segment;
    }
    if (req.body.description != null) {
      product.description = req.body.description;
    }
    if (req.body.price != null) {
      product.price = req.body.price;
    }
    if (req.body.registeredIn != null) {
      product.registeredIn = req.body.registeredIn;
    }
    const updatedProduct = await costumer.save();
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json({message: err.message});
  }
};

const deleteProductById = async (req, res) => {
    const product = await Products.findById(req.params.id);
    if (product  == null) {
      return res.status(404).json({ message: "Vendedor não encontrado!" });
    }
    try {
      await product .remove();
      res.status(200).json({ message: "Cadastro excluído com sucesso!!" });
    } catch (error) {
      res.status(500).json({ message: error.message});
    }
  };

module.exports = {getAllProducts,getProductsByName, CreateNewProduct, getProductById,getAllProducts, deleteProductById, updateProductById, getPurchaseBySeller }