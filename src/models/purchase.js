const mongoose = require("mongoose");

const purchaseSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    client:{
        type: String,
        required: true,
    },
    phoneNumber:{
        type: String,
        required: true,
    },
    tower:{
        type: String,
        required: true,
    },
    apartment:{
        type:String,
        required:true,
    },
    product:{
        type:String,
        required: true,
    },
    category:{
        type: String,
        required: true,
    },
    segment:{
        type: String,
        required: true,
    },
    formOfPayment:{
        type:String,
        required:true,
    },
    seller:{
        type:String,
        required:true,
    },
    registeredIn:{
        type: Date,
        required: true,
        default: new Date
    }
})

module.exports = mongoose.model('purchase', purchaseSchema)