const express= require('express');
const orderController = require('./orderController');
const orderRouter=express.Router();

orderRouter.get('/getPendingChannel',orderController.getAllPendingOrder);

orderRouter.post('/subscribleChannel',orderController.subscribeChannel)

module.exports=orderRouter;