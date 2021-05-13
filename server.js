const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const itemController = require("./controller/itemController.js");
const app = express();

if(process.env.NODE_ENV!="production")
{
    require("dotenv").config({path:"config/Keys.env"})
}

app.use(express.json());
app.use(cors({
    origin:`http://127.0.0.1:5500`
}))
app.use("/items",itemController)
const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    mongoose.connect(process.env.MONGO_DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        console.log("Mongoose is alive");
    })
    .catch(err=>{
        console.log(err)
    })
})