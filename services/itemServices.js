const itemModel = require("../model/itemModel.js");

exports.getAllItems=(req,res)=>{
   itemModel.find()
   .then((item)=>{
        res.json({
            message:"All items in the database",
            data:item,
            length:item.length
        })
   })
   .catch(err=>{
    res.status(404).json({
        message:err
    }) 
   })
}

exports.getAnItem = (req,res)=>
{
    
    itemModel.findById(req.params.id)
    .then((item)=>{
        res.json({
            message:`Item with id ${req.params.id} has been found`,
            data:item
        })
    })
    .catch(err=>{
        res.status(404).json({
            message:err
        }) 
       })
    
  
}

exports.createItem = (req,res)=>
{
    

    const newItem = new itemModel(req.body);
    newItem.save()
    .then((item)=>{
        res.json({
            message:"New item has been created",
            data:item
        })

    })
    .catch(err=>{
        res.status(404).json({
            message:err
        }) 
       })
    
    
}

exports.deleteAnItem = (req,res)=>
{
    itemModel.deleteOne({_id:req.params.id})
    .then((item)=>{
        res.json({
            message:`Item with id ${req.params.id} has been deleted`,
            data:item
        })
    })
    .catch(err=>{
        res.status(404).json({
            message:err
        }) 
       })
   
   
}

exports.deleteAllItems=(req,res)=>
{
    itemModel.deleteMany({})
    .then(()=>{
        res.json({
            message:"All items have been deleted"
        })
    })
    .catch(err=>{
        res.status(404).json({
            message:err
        }) 
       })
}

exports.updateAnItem = (req,res)=>
{
    itemModel.updateOne({_id:req.params.id},{name:req.body.name})
    .then((item)=>{
        res.json({
            message:`Item ${req.params.id} has been updated`,
            data:item
        })
    })
    .catch(err=>{
        res.status(404).json({
            message:err
        }) 
       })

 

}