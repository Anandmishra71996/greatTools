const express = require("express");
const quizRouter = express.Router();
const quizController = require("./quizController");

quizRouter.get("/questions", quizController.getQuestions);
module.exports = quizRouter;
