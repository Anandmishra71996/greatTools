const { quizSchema } = require("../../joiModels/joiSchema");
const Joi = require("joi");
const {
  getAllQuestions,
  saveUserQuiz,
} = require("../../models/quiz/quiz.modal");

const getQuestions = async (req, res) => {
  try {
    const questions = await getAllQuestions();
    res.json({
      isSuccess: true,
      data: questions,
      message: "Questions fetched successfully",
    });
  } catch (error) {
    res.status(500).json({
      isSuccess: false,
      message: "something went wrong",
    });
  }
};

const saveQuiz = async (req, res) => {
  try {
    const payload = req.body;
    console.log(payload);
    await Joi.valid(quizSchema, payload);
    console.log("verified");
    let quiz = await saveUserQuiz(payload);
    res.json({
      isSuccess: true,
      data: { quizId: quiz._id },
      message: "Saved successfully",
    });
  } catch (error) {
    console.log("catch", error);
    res.status(500).json({
      isSuccess: false,
      message: "Something went wrong",
      data: error,
    });
  }
};
module.exports = { getQuestions, saveQuiz };
