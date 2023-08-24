const express= require('express');
const userController = require('./userController');
const userRouter=express.Router();

userRouter.get('/registerByChannelId/:channelId',userController.registerByChannelId)


module.exports=userRouter;