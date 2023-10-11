const express= require('express');
const orderController = require('./orderController');
const orderRouter=express.Router();

orderRouter.get('/getPendingChannel/:userId',orderController.getAllPendingOrder);
orderRouter.post('/addNewOrder',orderController.addNewOrder);

orderRouter.post('/subscribleChannel',orderController.subscribeChannel);
orderRouter.get('/fetchLastCredit/:userId',orderController.getLastCredit);
orderRouter.get('/getOrders/:userId',orderController.getOrdersByuserID);
orderRouter.post('/addCongOrder',orderController.addNewCongOrder);
orderRouter.get('/getCongOrder/:orderId',orderController.getCongOrder);


orderRouter.get('/getTags/:videoId',orderController.getVideoTags)

module.exports=orderRouter;