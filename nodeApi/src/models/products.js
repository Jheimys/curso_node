
const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: String,
    brand: String,
    price: Number,
})

const Model = mongoose.model('produtcs', schema)

module.exports = Model