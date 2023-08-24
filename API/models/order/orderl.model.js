const Order = require('./order.mongo');
const order={
    getAllPendingOrder:async()=>{
       const orders= await Order.find({status:'Pending'});

       return orders;
    },
    
}

module.exports=order;