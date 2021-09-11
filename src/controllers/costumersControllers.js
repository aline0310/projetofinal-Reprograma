const express = require("express");
const mongoose = require("mongoose");
const Costumers = require("../models/costumers");


const getAllCostumers = async (req, res) => {
    const costumer = await Costumers.find()
    res.status(200).json(costumer);
};

const getCostumerById = async (req, res) => {
    const costumer = await Costumers.findById(req.params.id)
    res.status(200).json(costumer);
};

const CreateNewCostumer = async (req, res) => {
    const costumer = new Costumers ({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        phoneNumber: req.body.phoneNumber,
        tower: req.body.tower,
        apartment: req.body.apartment,
        registeredIn: req.body.registeredIn,
    });
    const costumerAlredyExists = await Costumers.findOne({nome:req.body.name})
    if(costumerAlredyExists){
        return res.status(409).json({error: "Vendedor ja cadastrado! Verifique os dados inseridos."})
    }
    try{
    const newCostumer = await costumer.save()
    res.status(201).json(newCostumer);
    }catch(err){
        res.status.apply(400).json({message:err.message})
    }
};

const deleteCostumerById = async (req, res) => {
    const costumer = await Costumers.findById(req.params.id);
    if (costumer == null) {
      return res.status(404).json({ message: "Vendedor não encontrado!" });
    }
    try {
      await costumer.remove();
      res.status(200).json({ message: "Cadastro excluído com sucesso!!" });
    } catch (error) {
      res.status(500).json({ message: error.message});
    }
  };

  const updateCostumerById = async (req, res) => {
    try {
      const costumer = await Costumers.findById(req.params.id);
  
      if (costumer == null) {
        return res.status(404).json({ message: "Cliente não encontrado! Verifique os dados inseridos." });
      }
      if (req.body.name != null) {
        costumer.name = req.body.name;
      }
      if (req.body.phoneNumber != null) {
        costumer.phoneNumber = req.body.phoneNumber;
      }
      if (req.body.tower != null) {
        costumer.tower = req.body.tower;
      }
      if (req.body.apartment != null) {
        costumer.apartment = req.body.apartment;
      }
      if (req.body.registeredIn != null) {
        costumer.registeredIn = req.body.registeredIn;
      }
      const updatedCostumer = await costumer.save();
      res.status(200).json(updatedCostumer);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  

module.exports = {getAllCostumers, getCostumerById, CreateNewCostumer, deleteCostumerById, updateCostumerById}