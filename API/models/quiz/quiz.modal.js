const questionMongo = require("./question.mongo");
const userQuiz = require("./quizUser.mongo");

const getAllQuestions = () => {
  try {
    const questions = questionMongo.find();
    return questions;
  } catch (error) {
    throw "Something went wrong ";
  }
};
const saveUserQuiz = async (quiz) => {
  try {
    console.log(userQuiz);
    let data = new userQuiz(quiz);
    data.save();

    return data;
  } catch (error) {
    console.log(error);
    throw "Something went wrong";
  }
};

module.exports = { getAllQuestions, saveUserQuiz };
