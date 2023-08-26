const express= require('express');
const userController = require('./userController');
const userRouter=express.Router();

userRouter.get('/registerByChannelId/:channelId',userController.registerByChannelId)
userRouter.get('/userDetails/:userId',userController.getUserDetails)


module.exports=userRouter;