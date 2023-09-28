const congratulatoryModel= require('./congratulatory.order.mongo')

module.exports={
    addNewmessage: async  (body)=>{
        var val = Math.floor(1000 + Math.random() * 9000);
        body={
            ...body,
            orderId:val
        }
      await  congratulatoryModel.create(body);
      return val;

    },
    getMessageByOrderId: async (orderId) =>{
        try {
            const order= await congratulatoryModel.findOne({orderId:orderId})
            if(!order){
                throw 'Order Not found'
            }
            return order;
        } catch (error) {
            throw 'Order not found'
        }
      
    }
}