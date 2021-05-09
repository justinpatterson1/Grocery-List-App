const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const itemController = require("./controller/itemController.js");
const app = express();

app.use(express.json());
app.use(cors({
    origin:`http://127.0.0.1:5500`
}))
app.use("/items",itemController)
const PORT = 4000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    mongoose.connect('mongodb+srv://admin:Password1@cluster0.t4mgf.mongodb.net/grocery-list?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        console.log("Mongoose is alive");
    })
    .catch(err=>{
        console.log(err)
    })
})