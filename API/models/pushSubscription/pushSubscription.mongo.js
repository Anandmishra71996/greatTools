const mongoose = require("mongoose");

const SubscriptionSchema = new mongoose.Schema(
  {
    endpoint: {
      type: String,
    },
    expirationTime: {
      type: String,
    },
    keys: {
      p256dh: {
        type: String,
      },
      auth: {
        type: String,
      },
    },
  },
  {
    timestamp: true,
  }
);
module.exports = mongoose.model("Subscription", SubscriptionSchema);
