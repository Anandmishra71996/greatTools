const questionMongo = require("./question.mongo");

const getAllQuestions = () => {
  try {
    const questions = questionMongo.find();
    return questions;
  } catch (error) {
    throw "Something went wrong ";
  }
};

module.exports = { getAllQuestions };
