const Subscription = require("./pushSubscription.mongo");
module.exports = {
  addNewSubscription: async (body) => {
    try {
      await Subscription.create(body);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
  getAllSubscription: async (body) => {
    try {
      let subs = await Subscription.find();
      return subs;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
};
