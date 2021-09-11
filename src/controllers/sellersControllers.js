const express = require("express");
const mongoose = require("mongoose");
const Sellers = require("../models/sellers");


const getAllSellers = async (req, res)=>{
    const seller = await Sellers.find()
    res.status(200).json(seller)
};

const getSellersById = async (req, res) => {
    const seller = await Sellers.findById(req.params.id)
    res.status(200).json(seller)
};


const CreateNewSeller = async (req, res) => {
    const seller = new Sellers ({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        category: req.body.category,
        segment: req.body.segment,
        phoneNumber: req.body.phoneNumber,
        registeredIn: req.body.registeredIn
    });
    const sellerAlredyExist = await Sellers.findOne({name:req.body.name})
    if(sellerAlredyExist){
        return res.status(409).json({error: "Vendedor ja cadastrado! Verifique os dados inseridos."})
    }
    try{
    const newSeller = await seller.save()
    res.status(201).json(newSeller);
    }catch(err){
        res.status(400).json({message:err.message})
    }
};

const updatePurchaseById = async (req, res) => {
  try {
    const seller = await Sellers.findById(req.params.id);

    if (seller == null) {
      return res.status(404).json({ message: "Pedido não encontrado! Verifique os dados inseridos." });
    }
    if (req.body.name != null) {
      sellers.name = req.body.name;
    }
    if (req.body.category != null) {
      sellers.category = req.body.category;
    }
    if (req.body.segment != null) {
      sellers.segment = req.body.segment;
    }
    if (req.body.phoneNumber != null) {
      sellers.apartment = req.body.phoneNumber;

    } if(req.body.registeredIn != null){
      sellers.registerdIn = req.body.registeredIn;
    }
    const updatedSeller = await purchase.save();
    res.status(200).json(updatedSeller);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



const deleteSellerById = async (req, res) => {
    const seller = await Sellers.findById(req.params.id);
    if (seller == null) {
      return res.status(404).json({ message: "Vendedor não encontrado!" });
    }
    try {
      await seller.remove();
      res.status(200).json({ message: "Cadastro excluído com sucesso!!" });
    } catch (error) {
      res.status(500).json({ message: error.message});
    }
  };
  

module.exports = {getAllSellers, getSellersById, CreateNewSeller, deleteSellerById, updatePurchaseById }