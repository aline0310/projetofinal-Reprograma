const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name:{
        type: String,
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
    description:{
        type:String,
        required:true,
    },
    price:{
        type:String,
        required:true,
    },
    registeredIn: {
        type: Date,
        required: true,
        default: new Date
    }
})

module.exports = mongoose.model('products', productsSchema)