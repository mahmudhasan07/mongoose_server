const express = require("express")
const route = express.Router()
const productSchema = require("./productSchema")

route.post("/additems", async (req, res) => {
    const data = req.body
    // console.log(data);
    const result = await productSchema.insertMany(data)
    console.log(result);
    res.send(result)
})

route.get("/items", async(req,res)=>{
    const result = await productSchema.find()
    res.send(result)
})


module.exports = route