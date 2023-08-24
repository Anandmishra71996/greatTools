const youtube=require('../../thirdPartyModules/youtubeApi.js')

const utilityController={
    getSubsciptionDetail:async (req,res,next)=>{
        try {
            const channelId=req.params.channelId;
            console.log(channelId)
            const channel_info=await youtube.getSubsciptionDetails(channelId);
           
            console.log(channel_info)

            // if(channel_info.pageInfo.totalResults<=0){
            //     res.status(400).json({
            //         isSuccess:false,
            //         data:'',
            //         message:'No Channel found with this channelId'
            //     })
            // }else{
            //     console.log('in else')
            //     let data={
            //         userId:channelId,
            //         source:'Youtube',
            //         userName:channel_info.items[0].snippet.title,
            //         credits:0
            //     }
            //     console.log(data)
            //   const user =await userModels.addNewUser(data);

            //   res.json({
            //     success:true,
            //     data:user,
            //     message:'User registered Successfully'
            //   })
            // }

        } catch (error) {
            
        }
    }
}
module.exports=utilityController