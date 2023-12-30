const express = require("express");
const festivalController = require("./festival.controller");
const festivalRouter = express.Router();

festivalRouter.post("/createNewFestival", festivalController.createNewFestival);
festivalRouter.get("/getFestival/:name", festivalController.getFestivalByName);

module.exports = festivalRouter;
