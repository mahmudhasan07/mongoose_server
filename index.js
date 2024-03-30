const express = require("express")
const cors = require("cors")
const port = 3000
const app = express()
app.use(cors())
app.use(express.json())

app.get("/", async(req,res)=>{
    res.send("Welcome to our server")
})


app.listen(port, ()=>{
    console.log(`server is running at ${port}`);
})