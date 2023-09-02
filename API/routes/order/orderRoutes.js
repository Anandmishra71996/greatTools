const express= require('express');
const orderController = require('./orderController');
const orderRouter=express.Router();

orderRouter.get('/getPendingChannel',orderController.getAllPendingOrder);
orderRouter.post('/addNewOrder',orderController.addNewOrder);

orderRouter.post('/subscribleChannel',orderController.subscribeChannel);
orderRouter.get('/fetchLastCredit/:userId',orderController.getLastCredit);

module.exports=orderRouter;