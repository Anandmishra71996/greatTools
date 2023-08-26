const order = require('../../models/order/orderl.model')
const user =require('../../models/user/user.models')
const youtube= require('../../thirdPartyModules/youtubeApi')
const ordermap = new Map()
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
        try {
            let userDetail;
            let {channelId,loggedinId}=req.body
            const totalSubscriber = await youtube.getSubsciptionDetails(channelId);
            
            ordermap.set(loggedinId,{channelId,totalSubscriber:totalSubscriber,isCreditUpdated:false})
                res.json({
                    success:true,
                    
                    message:'Subscribe page open Successfully'
                })
        } catch (error) {
            console.log(error)
        }
     
    //   await  setTimeout(async()=>{
    //         const getTotalSubscriptionAfter = await youtube.getSubsciptionDetails(channelId);
    //         console.log(getTotalSubscriptionAfter,getTotalSubscriptionBefore)
    //         if(Number(getTotalSubscriptionAfter)>Number(getTotalSubscriptionBefore)){
    //           userDetail= await user.increaseCreditByUserId(loggedinId)
    //         }       

    //     },30000)  
        
     
    },
    getLastCredit: async (req,res) =>{
        try {
            let loggedInId= req.params.userId;
            let channel= ordermap.get(loggedInId);
            console.log(channel)
            if(channel){
            const totalSubscriberNow = await youtube.getSubsciptionDetails(channel.channelId);
            if(totalSubscriberNow>channel.totalSubscriber){
                await user.increaseCreditByUserId(loggedInId);
                let userDetail= user.getUserDetails(loggedInId)
            ordermap.set(loggedInId,{channelId:channel.channelId,totalSubscriber:totalSubscriberNow,isCreditUpdated:true})
               res.json({
                    success:true,
                    data:userDetail,
                    message:'You have earn 2 Credits'
               })
            }else{
                res.json({
                    success:false,
                    data:userDetail,
                    message:'Sorry Last Credit not fetched'
               })
            }
        }else{            
                let userDetail= user.getUserDetails(loggedInId)
                res.json({
                     success:false,
                     data:userDetail,
                     message:'Sorry Last Credit not fetched'
                })
            }
        } catch (error) {
            console.log(error)
            res.json({
                success:false,
                data:userDetail,
                message:'Sorry Last Credit not fetched'
           })
        }
       
        
    }
}
module.exports=orderController