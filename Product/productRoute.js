const express = require("express")
const route = express.Router()
const productSchema = require("./productSchema")

route.post("/additems", async (req, res) => {
    const data = req.body
    console.log(data);
})


module.exports = route