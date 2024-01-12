const express = require("express");
const quizRouter = express.Router();
const quizController = require("./quizController");

quizRouter.get("/questions", quizController.getQuestions);
quizRouter.post("/createQuiz", quizController.saveQuiz);
module.exports = quizRouter;
