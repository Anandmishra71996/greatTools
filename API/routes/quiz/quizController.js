const { getAllQuestions } = require("../../models/quiz/quiz.modal");

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

module.exports = { getQuestions };
