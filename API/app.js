const express = require("express");
const userRouter = require("./routes/user/userRoutes");
const port = 5000;
const cors = require("cors");
const youtube = require("./thirdPartyModules/youtubeApi");
const utilityRouter = require("./routes/utility/utilityRoutes");
const orderRouter = require("./routes/order/orderRoutes");
const notifRouter = require("./routes/notification/notification.routes");
app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(express.urlencoded());
app.use("/user", userRouter);
app.use("/utility", utilityRouter);
app.use("/order", orderRouter);
app.use("/order", orderRouter);
app.use("/notification", notifRouter);
app.get("/", async (req, res) => {
  try {
    const result = await youtube.getChannelById("as");
    console.log("got result");
    res.status(200).send(result);
  } catch (err) {
    console.log(err);
  }
});
module.exports = app;
