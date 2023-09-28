const userModels = require('../../models/user/user.models.js');
const youtube=require('../../thirdPartyModules/youtubeApi.js')
const userController={
    registerByChannelId:async (req,res,next)=>{
        try {
            const channelId=req.params.channelId;
            console.log(channelId)
            const channel_info=await youtube.getChannelById(channelId);
           

            if(channel_info.pageInfo.totalResults<=0){
                res.status(400).json({
                    isSuccess:false,
                    data:'',
                    message:'No Channel found with this channelId'
                })
            }else{
                console.log('in else')
                let data={
                    userId:channelId,
                    source:'Youtube',
                    userName:channel_info.items[0].snippet.title,
                    credits:0,
                    customUrl:channel_info.items[0].snippet.customUrl,
                }
                console.log(data)
              const user =await userModels.addNewUser(data);

              res.json({
                success:true,
                data:user,
                message:'User registered Successfully'
              })
            }

        } catch (error) {
            res.status(500).json({
                isSuccess:false,
                data:'',
                message:'No Channel found with this channelId'
            })
        }
    },
    getUserDetails : async (req,res,next) => {
        try {
            const userId = req.params.userId;
         const user= await userModels.getUserDetails(userId);
         res.status(200).json({
            success:true,
            data:user,
            message:'Fetched successfully'
         })
        } catch (error) {
            res.status(400).json({
                success:false,
                message:'Can not fetch user Details'
            })
        }
     
    }

}
module.exports=userController