const Order = require('../../models/order/order.mongo')
const order = require('../../models/order/orderl.model')
const user = require('../../models/user/user.models')
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
    addNewOrder: async (req,res)=>{
        try {
            let payload= req.body;
            let userData= await user.getUserDetails(payload.userId);
            if(user){
                let creditRequired= Number(payload.no_of_subscriber) * 2;
                if(userData.credits>=creditRequired){
                    userData.credits= userData.credits- creditRequired
                }else{
                    res.status(400).json({
                        success:false,
                        message:'You do not have enough Credit'
                    })
                }
                let orderData={
                    userId:userData.userId,
                    source:payload.source||'Youtube',
                    credits:creditRequired,
                    orderType:payload.orderType||'Subscriber',
                    status:'Pending',
                    userName:userData.userName
                }
                await order.addNewOrder(orderData);
                userData.save();
                res.json({
                    success:true,
                    message:'Order Added Successfully'
                })
            }
        } catch (error) {
            res.status(500).json({
                success:false,
                message:'Something Went Wrong'
            })
        }
    },
    subscribeChannel: async function(req,res){
        try {
            let userDetail;
            let {channelId,loggedinId}=req.body
            let channel= ordermap.get(loggedinId);
            if(channel && !channel.isCreditUpdated){
           let isUpdated=await updateCredit(channel);
            }
            const totalSubscriber = await youtube.getSubsciptionDetails(channelId);
            
            ordermap.set(loggedinId,{channelId,totalSubscriber:totalSubscriber,isCreditUpdated:false})
             channel= ordermap.get(loggedinId);
             console.log(channel)
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
   
    getLastCredit: async function(req,res) {
        try {
            let loggedInId= req.params.userId;
            let channel= ordermap.get(loggedInId);
            console.log(channel)
             if(channel && !channel.isCreditUpdated){
              
            let isUpdated=await updateCredit(channel);
            if(isUpdated){
                let userDetail=await user.getUserDetails(loggedInId)
               res.json({
                    success:true,
                    data:userDetail,
                    message:'You have earn 2 Credits'
               })
            }else{
                res.json({
                    success:false,
                    message:'Sorry Last Credit not fetched'
               })
            }
        }else{            
                res.json({
                     success:false,
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
       
        
    },
   
    getOrdersByuserID: async (req,res) =>{
        const userId= req.params.userId;
        try {
            const orders=await order.getOrderByUserId(userId);
            res.json({
                success:true,
                data:orders,
                message:'Order fetched successfully'
            })
        } catch (error) {
            res.status(400).json({
                success:false,
                message:'Something went wrong'
            })
        }
    }
}
async function updateCredit(channel){
    try {
        console.log('inside update credit')
        const totalSubscriberNow = await youtube.getSubsciptionDetails(channel.channelId);
        console.log(totalSubscriberNow,channel.totalSubscriber)
        if(totalSubscriberNow>channel.totalSubscriber){
            await user.increaseCreditByUserId(loggedInId);
            await order.decreaseCreditByuserId(channel.channelId);
        ordermap.set(loggedInId,{channelId:channel.channelId,totalSubscriber:totalSubscriberNow,isCreditUpdated:true})        
            return true
     }else{
          return false
        }
    } catch (error) {
        console.logg(error)
        return false
    }
   
    }
module.exports=orderController