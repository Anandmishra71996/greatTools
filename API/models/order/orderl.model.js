const Order = require('./order.mongo');
const order={
    getAllPendingOrder:async(source='Youtube',type='Subscriber')=>{
       const orders= await Order.find({status:'Pending',source:source,orderType:type, credits:{$gt:0}}).distinct(userId);

       return orders;
    },
    decreaseCreditByuserId : async (channelId,source='Youtube',type='Subscriber') =>{
        const order=await Order.findOne({status:'Pending', userId:channelId,source:source,orderType:type, credits:{$gt:0}})
        if(order){
            order.credits=order.credits-2;
            if(order.credits<=0){
                order.status='Completed'
            }
            order.save();
        }
    },
    addNewOrder:async(data)=>{
        try {
            await Order.create(data);
        } catch (error) {
            console.log(error)
        }
       
    }
}

module.exports=order;