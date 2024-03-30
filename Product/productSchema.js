const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name : String,
    price : Number,
    details : String,

})

module.exports = mongoose.model("product", productSchema)