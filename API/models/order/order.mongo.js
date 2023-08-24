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
        
    }
},
{
    timestamp:true
}
);
const Order = mongoose.model('Order',orderSchema)
const defaultRecords=[{
    userId:'UC7uD202u4uLyB-6IwlVStWA',
    source:'Youtube',
    credits:10000,
    orderType:'Subscriber',
    status:'Pending'
},
{
    userId:'UC9QYux7I5fJIqyXtLeGhpVg',
    source:'Youtube',
    credits:10000,
    orderType:'Subscriber',
    status:'Pending'
},
{
    userId:'UCrzOZ2fFkWYqEBl1cnrQ2vw',
    source:'Youtube',
    credits:10000,
    orderType:'Subscriber',
    status:'Pending'
},
{
    userId:'UCzivMjA1DIzmLe3WogO7RMA',
    source:'Youtube',
    credits:10000,
    orderType:'Subscriber',
    status:'Pending'
},
{
    userId:'UCbuXzmV1usauwCCgi4DOhDQ',
    source:'Youtube',
    credits:10000,
    orderType:'Subscriber',
    status:'Pending'
},
{
    userId:'UC2TvmRN7vDClWvTfFfckXkQ',
    source:'Youtube',
    credits:10000,
    orderType:'Subscriber',
    status:'Pending'
}
];

(async function(){
    const data= await Order.find({});
       if(!data.length){
        await Order.insertMany(defaultRecords)
    }
})();
module.exports=Order;