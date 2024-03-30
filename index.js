const express = require("express")
const cors = require("cors")
const port = 3000
const mongoose = require('mongoose');
const app = express()
app.use(cors())
app.use(express.json())
// mongodb+srv://<username>:<password>@cluster0.oqk84kq.mongodb.net/
const connectDB = mongoose.connect(`mongodb+srv://test_mongoose:N6Njs7Tgu2bUiwNX@cluster0.oqk84kq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)

function run() {
    if (connectDB) {
        console.log("connect to the database");
    }
    else {
        console.log("Disconnect from the database");
    }
}

run()



app.get("/", async (req, res) => {
    res.send("Welcome to our server")
})


app.listen(port, () => {
    console.log(`server is running at ${port}`);
})