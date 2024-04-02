const express = require('express')
const route = express.Router()


route.post("/addusers", async(req,res)=>{
    const data = req.body
    console.log(data);
})