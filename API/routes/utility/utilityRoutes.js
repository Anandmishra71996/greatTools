const express = require("express");
const utilityController = require("./utilityController");
const multer = require("multer");
const utilityRouter = express.Router();
const upload = multer({
  storage: multer.memoryStorage(), // Store files in memory for efficient S3 uploads
  limits: { fileSize: 1024 * 1024 * 5 }, // Limit file size to 5MB (adjust as needed)
});
utilityRouter.get(
  "/subscription/:channelId",
  utilityController.getSubsciptionDetail
);
utilityRouter.post(
  "/uploadFile",
  upload.single("file"),
  utilityController.uploadFile
);

module.exports = utilityRouter;
