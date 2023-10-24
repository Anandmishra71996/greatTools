const webPush = require("web-push");
const {
  addNewSubscription,
  getAllSubscription,
} = require("../../models/pushSubscription/pushSubscription.model");
require("dotenv").config();
console.log(process.env.TEST);
const vapidKeys = {
  publicKey: process.env.Vapid_public_key,
  privateKey: process.env.Vapid_private_key,
};

webPush.setVapidDetails(
  "mailto:anandmishra71996@gmail.com",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);
module.exports = {
  subscribe: async (req, res) => {
    try {
      console.log(req);
      const subscription = req.body;
      console.log(subscription);
      await addNewSubscription(subscription);

      res.status(200).json({});
    } catch (error) {
      res.status(500).json("something went wrong");
    }
  },
  sendNotification: async (req, res) => {
    try {
      const notificationPayload = JSON.stringify({
        notification: {
          title: "Push Notification",
          body: "This is a push notification!",
          icon: "/assets/images/fav.png", // Replace with your icon URL
        },
      });
      let subscriptions = await getAllSubscription();
      console.log(subscriptions);
      Promise.all(
        subscriptions.map((subscription) => {
          return webPush
            .sendNotification(subscription, notificationPayload)
            .catch((err) => {
              console.error("Error sending push notification: ", err);
            });
        })
      )
        .then(() => {
          res.status(200).json({});
          console.log("send");
        })
        .catch((err) => {
          console.error("Error sending push notifications: ", err);
          res.sendStatus(500);
        });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Something went wrong",
      });
      console.log(error);
    }
  },
};
