const { s3 } = require("../../thirdPartyModules/aws.s3.js");
const youtube = require("../../thirdPartyModules/youtubeApi.js");

const utilityController = {
  getSubsciptionDetail: async (req, res, next) => {
    try {
      const channelId = req.params.channelId;
      console.log(channelId);
      const channel_info = await youtube.getSubsciptionDetails(channelId);

      console.log(channel_info);

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
    } catch (error) {}
  },
  uploadFile: async (req, res, next) => {
    try {
      const file = req.file;
      if (!file) {
        return res.status(400).send("No file uploaded.");
      }

      const params = {
        Bucket: process.env.S3_BUCKET,
        Key: file.originalname, // Use original filename on S3
        Body: file.buffer,
      };

      const fileUploaded = await s3.upload(params).promise();
      console.log(fileUploaded);

      res.status(200).json({
        isSuccess: true,
        data: { url: fileUploaded.Location },
        message: "file uploaded Successfully",
      });
    } catch (err) {
      console.error(err);
      res.status(500).send("Error uploading file.");
    }
  },
};
module.exports = utilityController;
