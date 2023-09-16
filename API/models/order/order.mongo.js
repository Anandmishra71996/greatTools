"use strict"
const mongoose = require('mongoose');
const youtube =require('../../thirdPartyModules/youtubeApi')
const orderSchema=new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    source:{
        type:String,
        required:true
    },
    orderType:{
        type:String,
        required:true
    },
    credits:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        
    },
    userName:{
        type:String,
        required:true
    }
},
{
    timestamp:true
}
);
const Order = mongoose.model('Order',orderSchema)
const defaultRecords=[
    {
      userId: "UC7uD202u4uLyB-6IwlVStWA",
      source: "Youtube",
      orderType: "Subscriber",
      credits: 1000,
      status: "Pending",
      userName: "Joke Signal"
    },
    {
      userId: "UC9QYux7I5fJIqyXtLeGhpVg",
      source: "Youtube",
      orderType: "Subscriber",
      credits: 10000,
      status: "Pending",
      userName: "Youtube Yard"
    },
    {
      userId: "UCrzOZ2fFkWYqEBl1cnrQ2vw",
      source: "Youtube",
      orderType: "Subscriber",
      credits: 10000,
      status: "Pending",
      userName: "Gulshan Yadav"
    },
    {
      userId: "UCzivMjA1DIzmLe3WogO7RMA",
      source: "Youtube",
      orderType: "Subscriber",
      credits: 10000,
      status: "Pending",
      userName: "Avi Facts"
    },
    {
      userId: "UCbuXzmV1usauwCCgi4DOhDQ",
      source: "Youtube",
      orderType: "Subscriber",
      credits: 9998,
      status: "Pending",
      userName: "Af wooden master"
    },
    {
      userId: "UC2TvmRN7vDClWvTfFfckXkQ",
      source: "Youtube",
      orderType: "Subscriber",
      credits: 10000,
      status: "Pending",
      userName: "Anjali bitti"
    },
    {
      userId: "UC7uD202u4uLyB-6IwlVStWA",
      source: "Youtube",
      orderType: "Subscriber",
      credits: 20,
      status: "Pending",
      userName: "Joke Signal"
    }
  ];

(async function(){
    const data= await Order.find({});
       if(!data.length){

        await Order.insertMany(defaultRecords);
    }
})();
module.exports=Order;