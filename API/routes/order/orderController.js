const order = require("../../models/order/orderl.model");
const user = require("../../models/user/user.models");
const history = require("../../models/history/history.model");
const youtube = require("../../thirdPartyModules/youtubeApi");
const Order = require("../../models/order/order.mongo");
const congratulatoryModel = require("../../models/congratulatory/congratulatory.order.mongo");
const congratulatoryOrderModel = require("../../models/congratulatory/congratulatory.order.model");
const userMongo = require("../../models/user/user.mongo");
const ordermap = new Map();
const orderController = {
  getAllPendingOrder: async (req, res) => {
    try {
      const loggedInId = req.params.userId;

      const orders = await order.getAllPendingOrder(loggedInId);

      res.json({
        success: true,
        data: orders,
        message: "Orders fetched Successfully",
      });
    } catch (error) {
      console.log(error);
    }
  },
  addNewOrder: async (req, res) => {
    try {
      let payload = req.body;
      let userData = await user.getUserDetails(payload.userId);
      if (user) {
        let creditRequired = Number(payload.no_of_subscriber) * 2;
        if (userData.credits >= creditRequired) {
          userData.credits = userData.credits - creditRequired;
        } else {
          res.status(400).json({
            success: false,
            message: "You do not have enough Credit",
          });
        }
        let orderData = {
          userId: userData.userId,
          source: payload.source || "Youtube",
          credits: creditRequired,
          orderType: payload.orderType || "Subscriber",
          status: "Pending",
          userName: userData.userName,
          customUrl:userData.customUrl
        };
        await order.addNewOrder(orderData);
        userData.save();
        res.json({
          success: true,
          message: "Order Added Successfully",
        });
      }
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Something Went Wrong",
      });
    }
  },
  subscribeChannel: async function (req, res) {
    try {
      let userDetail;
      let { channelId, loggedinId } = req.body;
      let channel = ordermap.get(loggedinId);
      if (channel && !channel.isCreditUpdated) {
        let isUpdated = await updateCredit(loggedinId);
      }
      const totalSubscriber = await youtube.getSubsciptionDetails(channelId);

      ordermap.set(loggedinId, {
        channelId,
        totalSubscriber: totalSubscriber,
        isCreditUpdated: false,
      });
      channel = ordermap.get(loggedinId);
      console.log(channel);
      res.json({
        success: true,

        message: "Subscribe page open Successfully",
      });
    } catch (error) {
      console.log(error);
      res.json({
        success: false,

        message: "Subscribe page open Successfully",
      });
    }

    //   await  setTimeout(async()=>{
    //         const getTotalSubscriptionAfter = await youtube.getSubsciptionDetails(channelId);
    //         console.log(getTotalSubscriptionAfter,getTotalSubscriptionBefore)
    //         if(Number(getTotalSubscriptionAfter)>Number(getTotalSubscriptionBefore)){
    //           userDetail= await user.increaseCreditByUserId(loggedinId)
    //         }

    //     },30000)
  },

  getLastCredit: async function (req, res) {
    try {
      let loggedInId = req.params.userId;
      let channel = ordermap.get(loggedInId);
      console.log(channel);
      if (channel && !channel.isCreditUpdated) {
        let isUpdated = await updateCredit(loggedInId);
        if (isUpdated) {
          let userDetail = await user.getUserDetails(loggedInId);
          res.json({
            success: true,
            data: userDetail,
            message: "You have earn 2 Credits",
          });
        } else {
          res.json({
            success: false,
            message: "Sorry Last Credit not fetched",
          });
        }
      } else {
        res.json({
          success: false,
          message: "Sorry Last Credit not fetched",
        });
      }
    } catch (error) {
      console.log(error);
      res.json({
        success: false,
        message: "Sorry Last Credit not fetched",
      });
    }
  },

  getOrdersByuserID: async (req, res) => {
    const userId = req.params.userId;
    try {
      const orders = await order.getOrderByUserId(userId);
      res.json({
        success: true,
        data: orders,
        message: "Order fetched successfully",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: "Something went wrong",
      });
    }
  },
  updateCustomUrl: async () => {
    const orders = await Order.find();
    console.log(orders.length);
    for (let i = 0; i < orders.length; i++) {
      const channel_info = await youtube.getChannelById(orders[i].userId);
      orders[i].customUrl = channel_info.items[0].snippet.customUrl;
      orders[i].save();
    }
  },
  addNewCongOrder: async (req, res) => {
    try {
      let body = req.body;
      const val = await congratulatoryOrderModel.addNewmessage(body);
      res.json({
        success: true,
        message: "saved successfully",
        data: {
          orderId: val,
        },
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: "not saved successfully",
       
      });
    }
  },
  getCongOrder: async (req, res) => {
    try {
      let orderId = req.params.orderId;
      const val = await congratulatoryOrderModel.getMessageByOrderId(orderId);
      res.json({
        success: true,
        message: "fetched successfully",
        data:val,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: "not found",
       
      });
    }
  },
  getVideoTags: async (req,res) =>{
    let videoId=req.params.videoId;
    console.log(videoId)
    let result = await youtube.getVideoDetails(videoId);
    
    console.log(result)
    res.json({
      success:true,
      data:result,
      message:'Tag extracted successfully'
    })
  }
};
async function updateCredit(loggedInId) {
  try {
    console.log("inside update credit");
    let channel = ordermap.get(loggedInId);
    const totalSubscriberNow = await youtube.getSubsciptionDetails(
      channel.channelId
    );
    console.log(totalSubscriberNow, channel.channelId);

    if (
      totalSubscriberNow > channel.totalSubscriber ||
      channel.totalSubscriber > 1000
    ) {
      await user.increaseCreditByUserId(loggedInId);
      await order.decreaseCreditByuserId(channel.channelId);
      await history.addNewHistory(loggedInId, channel.channelId, "Subscribe");
      ordermap.set(loggedInId, {
        channelId: channel.channelId,
        totalSubscriber: totalSubscriberNow,
        isCreditUpdated: true,
      });
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
}
// orderController.updateCustomUrl();
module.exports = orderController;
