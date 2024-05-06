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

route.get("/items", async (req, res) => {
    const result = await productSchema.find()
    res.send(result)
})

route.get(`/items/:name`, async (req, res) => {
    const name = req.params.name
    const query = { name: { $regex: name, $options: "i" } }
    const result = await productSchema.findOne(query)
    res.send(result)
})

route.get("/itemInfo/:id", async (req, res) => {
    const id = req.params.id
    const query = { _id: new Object(id) }
    const result = await productSchema.findOne(query)
    res.send(result)
})

route.get(`/item/:data`, async (req, res) => {
    const sortdata = req.params.data
    console.log(sortdata);
    const query = { price: 1 }
    const result = await productSchema.find().collation()
    res.send(result)
})

route.delete("/items/:id", async (req, res) => {
    const id = req.params.id
    const query = { _id: new Object(id) }
    const result = await productSchema.deleteOne(query)
    res.send(result)

})


route.patch("/updateInfo/:id", async (req, res) => {
    const id = req.params.id
    const data = req.body
    console.log(data);
    console.log(id);
    const query = { _id: new Object(id) }
    const options = { upsert: true }
    const updateDoc = {
        $set: {
            price: data?.price
        },
    };
    const result = await productSchema.updateOne(query, updateDoc, options)
    res.send(result)
})


module.exports = route