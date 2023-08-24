const express= require('express');
const utilityController = require('./utilityController');
const utilityRouter=express.Router();

utilityRouter.get('/subscription/:channelId',utilityController.getSubsciptionDetail)

module.exports=utilityRouter