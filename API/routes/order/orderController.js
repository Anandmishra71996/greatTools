const order = require('../../models/order/orderl.model')
const user =require('../../models/user/user.models')
const youtube= require('../../thirdPartyModules/youtubeApi')
const orderController={

    getAllPendingOrder: async (req,res) =>{
        try {
           const orders= await order.getAllPendingOrder();
            res.json({
                success:true,
                data:orders,
                message:'Orders fetched Successfully'
            })

        } catch (error) {
            console.log(error)
        }
    },
    subscribeChannel: async (req,res)=>{
        let userDetail;
        let {channelId,loggedinId}=req.body
        const getTotalSubscriptionBefore = await youtube.getSubsciptionDetails(channelId);
      await  setTimeout(async()=>{
            const getTotalSubscriptionAfter = await youtube.getSubsciptionDetails(channelId);
            console.log(getTotalSubscriptionAfter,getTotalSubscriptionBefore)
            // if(Number(getTotalSubscriptionAfter)>Number(getTotalSubscriptionBefore)){
            //   userDetail= await user.increaseCreditByUserId(loggedinId)
            // }
            userDetail= await user.increaseCreditByUserId(loggedinId)

        },30000)  
        
        res.json({
            success:true,
            data:userDetail,
            message:'SubscribedSuccessfully'
        })
    }
}
module.exports=orderController