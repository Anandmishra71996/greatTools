const notifController = require("./notification.controller");
const express = require("express");
const notifRouter = express.Router();

notifRouter.post("/subscribe", notifController.subscribe);

notifRouter.post("/sendNotification", notifController.sendNotification);
module.exports = notifRouter;
