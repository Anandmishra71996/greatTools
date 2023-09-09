const Order = require("./order.mongo");
const order = {
  getAllPendingOrder: async (source = "Youtube", type = "Subscriber") => {
    const orders=  await Order.aggregate([
      {
        $match: {
          $and: [
            { status: "Pending" },
            { source: source },
            { orderType: type },
            { credits: { $gt: 0 } },
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
