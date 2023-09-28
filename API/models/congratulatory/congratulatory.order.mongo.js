"use strict"
const mongoose = require('mongoose');
const orderSchema=new mongoose.Schema({

    source:{
        type:String,
        required:true
    },
   
    userName:{
        type:String,
        required:true
    },
    orderId:{
        type:Number
    }
},
{
    timestamp:true
}
);
const congratulatoryModel = mongoose.model('congratulator',orderSchema)


module.exports=congratulatoryModel;