const express = require("express");
const quizRouter = express.Router();
const quizController = require("./quizController");

quizRouter.get("/questions", quizController.getQuestions);
quizRouter.post("/createQuiz", quizController.saveQuiz);
quizRouter.get("/getQuizById/:id", quizController.getQuizById);
quizRouter.post("/submitResponse", quizController.submitResponse);
module.exports = quizRouter;
