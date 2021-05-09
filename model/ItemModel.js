const mongoose = require('mongoose');
const { Schema } = mongoose;

  const itemSchema = new Schema({
   name:{
       type:String,
       require:true,
   },

   dateCreated:
   {
       type:Date,
       default:Date.now()
   }
  });

const itemModel = mongoose.model('item',itemSchema)
module.exports = itemModel;