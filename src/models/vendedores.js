const mongoose = require("mongoose");

const vendedoresSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nome:{
        type: String,
        required: true,
    },
    categoria:{
        type: String,
        required: true,
    },
    segmento:{
        type: String,
        required: true,
    },
    telefone:{
        type: String,
        required:true
    },
    cadastradoEm: {
        type: Date,
        required: true,
        default: new Date
    }
})

module.exports = mongoose.model('vendedores', vendedoresSchema)