const mongoose = require("mongoose");

const sellersSchema = new mongoose.Schema({
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
    phoneNumber:{
        type: String,
        required:true,
    },
    registeredIn: {
        type: Date,
        required: true,
        default: new Date
    }
})

module.exports = mongoose.model('sellers', sellersSchema)