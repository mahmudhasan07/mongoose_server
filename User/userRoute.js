const express = require('express')
const route = express.Router()
const userSchema = require('./userSchema')


route.post("/addusers", async (req, res) => {
    const data = req.body
    console.log(data);
    const result = await userSchema.insertMany(data)
    res.send(result)
})

route.get("/users", async (req, res) => {
    const result = await userSchema.find()
    res.send(result)
})

module.exports = route