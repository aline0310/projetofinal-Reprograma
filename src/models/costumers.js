const mongoose = require("mongoose");

const costumersSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name:{
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
    registeredIn:{
        type: Date,
        required: true,
        default: new Date
    }
})

module.exports = mongoose.model('costumers', costumersSchema)