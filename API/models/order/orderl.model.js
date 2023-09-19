const Order = require("./order.mongo");
const History= require('../history/history.model')
const order = {
  getAllPendingOrder: async (loggedInId,source = "Youtube", type = "Subscriber") => {
    console.log(loggedInId,'loggedin')
    const channelIds= await History.getSubscribedChannelIds(loggedInId);
    const orders=  await Order.aggregate([
      {
        $match: {
          $and: [
            { status: "Pending" },
            { source: source },
            { orderType: type },
            { credits: { $gt: 0 } },
            {userId:{$nin:channelIds||[]}}
          ],
        },
      },{
        $group:{
          _id:"$userId",
          uniqueDocs: {
            $addToSet: "$$ROOT" // Create an array of unique documents for each score
          }
        }
      },
      {
        $replaceRoot:{
          newRoot:{$arrayElemAt:["$uniqueDocs",0]}
        }
      }
    ]);
   
    return orders;
  },
  decreaseCreditByuserId: async (
    channelId,
    source = "Youtube",
    type = "Subscriber"
  ) => {
    const order = await Order.findOne({
      status: "Pending",
      userId: channelId,
      source: source,
      orderType: type,
      credits: { $gt: 0 },
    });
    if (order) {
      order.credits = order.credits - 2;
      if (order.credits <= 0) {
        order.status = "Completed";
      }
      order.save();
    }
  },
  addNewOrder: async (data) => {
    try {
      await Order.create(data);
    } catch (error) {
      throw error;
      console.log(error);
    }
  },
  getOrderByUserId: async (userId) =>{
    try {
     const orders = await Order.find({userId:userId});
     return orders;
    } catch (error) {
      throw error
    }
  }
};

module.exports = order;
