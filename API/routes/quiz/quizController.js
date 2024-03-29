// const { quizSchema } = require("../../joiModels/joiSchema");
// const Joi = require("Joi");
const {
  getAllQuestions,
  saveUserQuiz,
  getQuizWithQuesById,
  saveQuizResponse,
  getResponseByQuizId,
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
const getQuizById = async (req, res) => {
  try {
    let quizId = req.params.id;
    console.log(quizId);
    const questions = await getQuizWithQuesById(quizId);
    res.json({
      isSuccess: true,
      data: questions,
      message: "Quiz fetched successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      isSuccess: false,
      message: "something went wrong",
    });
  }
};
const getQuizResponseById = async (req, res) => {
  try {
    let quizId = req.params.id;
    console.log(quizId);
    const response = await getResponseByQuizId(quizId);
    res.json({
      isSuccess: true,
      data: response,
      message: "Quiz Response fetched successfully",
    });
  } catch (error) {
    res.status(500).json({
      isSuccess: false,
      message: "something went wrong",
    });
  }
};
const submitResponse = async (req, res) => {
  try {
    const payload = req.body;

    let quizId = payload.quizId;
    console.log(quizId);
    const questions = await getQuizWithQuesById(quizId);
    console.log(payload);
    /* Calculate Score */
    const score = payload.questions.reduce((s, q) => {
      let quest = questions[0].questions.find(
        (ques) => ques._id == q.questionId
      );
      if (quest.correctOption == q.optionId) {
        return s + 1;
      } else {
        return s;
      }
    }, 0);
    const quizRes = {
      ...payload,
      score,
    };
    const savedres = await saveQuizResponse(quizRes);
    res.json({
      isSuccess: true,
      data: savedres,
      message: "Quiz fetched successfully",
    });
  } catch (error) {
    console.log(error);
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
    // await Joi.valid(quizSchema, payload);
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
module.exports = {
  getQuestions,
  saveQuiz,
  getQuizById,
  submitResponse,
  getQuizResponseById,
};
