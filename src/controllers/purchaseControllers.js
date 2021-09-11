const express = require("express");
const mongoose = require("mongoose");
const Purchases = require("../models/purchase");


const getAllPurchase = async (req, res)=>{
    const purchase = await Purchases.find()
    res.status(200).json(purchase);
};

const getPurchaseById = async (req, res) => {
    const purchase = await Purchases.findById(req.params.id)
    res.status(200).json(purchase);
};

const CreateNewPurchase = async (req, res) => {
    const purchase = new Purchases ({
        _id: new mongoose.Types.ObjectId(),
        client: req.body.client,
        phoneNumber: req.body.phoneNumber,
        tower: req.body.tower,
        apartment: req.body.apartment,
        product: req.body.product,
        category: req.body.category,
        segment: req.body.segment,
        formOfPayment: req.body.formOfPayment,
        seller: req.body.seller,
        registeredIn: req.body.registeredIn,
    });
    const purchaseAlredyExists = await Purchases.findOne({nome:req.body.name})
    if(purchaseAlredyExists){
        return res.status(409).json({error: "Pedido já cadastrado! Verifique os dados inseridos."})
    }
    try{
    const newPurchase = await purchase.save()
    res.status(201).json(newPurchase);
    }catch(err){
        res.status.apply(400).json({message:err.message})
    }
};

const deletePurchaseById = async (req, res) => {
    const purchase = await Purchases.findById(req.params.id);
    if (purchase == null) {
      return res.status(404).json({ message: "Vendedor não encontrado!"});
    }
    try {
      await purchase.remove();
      res.status(200).json({ message: "Pedido excluído com sucesso!!"});
    } catch (error) {
      res.status(500).json({ message: error.message});
    }
  };

  const updatePurchaseById = async (req, res) => {
    try {
      const purchase = await Purchases.findById(req.params.id);
  
      if (purchase == null) {
        return res.status(404).json({ message: "Pedido não encontrado! Verifique os dados inseridos." });
      }
      if (req.body.client != null) {
        purchase.client = req.body.client;
      }
      if (req.body.phoneNumber != null) {
        purchase.phoneNumber = req.body.phoneNumber;
      }
      if (req.body.tower != null) {
        purchasetower = req.body.tower;
      }
      if (req.body.apartment != null) {
        purchase.apartment = req.body.apartment;

      } if(req.body.purchaseOrder != null){
        purchase.purchaseOrder = req.body.purchaseOrder;
      }
      if(req.body.product != null){
        purchase.product = req.body.product;
      }
      if(req.body.segment != null){
        purchase.segment = req.body.segment;
      }
      if(req.body.formOfPayment != null){
        purchase.formOfPayment = req.body.formOfPayment;
      }
      if(req.body.seller != null){
        purchase.seller = req.body.seller;
      }
      if(req.body.registeredIn != null){
        purchase.registeredIn = req.body.registeredIn;
      }
      if (req.body.registeredIn != null) {
        purchase.registeredIn = req.body.registeredIn;
      }
      const updatedPurchase = await purchase.save();
      res.status(200).json(updatedPurchase);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  

module.exports = {getAllPurchase, getPurchaseById, CreateNewPurchase , deletePurchaseById, updatePurchaseById }