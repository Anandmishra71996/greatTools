const questionMongo = require("./question.mongo");
const quizResponseMongo = require("./quizResponse.mongo");
const userQuiz = require("./quizUser.mongo");
const mongoose = require("mongoose");

const getAllQuestions = () => {
  try {
    const questions = questionMongo.find().sort({ questionSerial: 1 });
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
const saveQuizResponse = async (quiz) => {
  try {
    let data = new quizResponseMongo(quiz);
    data.save();

    return data;
  } catch (error) {
    console.log(error);
    throw "Something went wrong";
  }
};
const getQuizWithQuesById = async (quizId) => {
  try {
    let quiz = await userQuiz.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(quizId),
        },
      },
      {
        $unwind: "$questions",
      },
      {
        $lookup: {
          from: "quizquestions",
          localField: "questions.questionId",
          foreignField: "_id",
          as: "questionData",
        },
      },
      {
        $unwind: "$questionData",
      },
      {
        $sort: {
          "questionData.questionSerial": 1, // Sort in ascending order
        },
      },
      {
        $group: {
          _id: "$_id",
          name: { $first: "$name" },
          questions: {
            $push: {
              _id: "$questions._id",
              correctOption: "$questions.optionId",
              Question: "$questionData.Question",
              Options: "$questionData.Options",
              questionSerial: "$questionData.questionSerial",
            },
          },
        },
      },
    ]);
    return quiz;
  } catch (error) {
    console.log(error);
    throw "Something went wrong";
  }
};
const getResponseByQuizId = async (quizId) => {
  try {
    let quiz = await quizResponseMongo.aggregate([
      {
        $match: { quizId: new mongoose.Types.ObjectId(quizId) },
      },
      {
        $lookup: {
          as: "userquizzes",
          from: "userquizzes",
          foreignField: "_id",
          localField: "quizId",
        },
      },
      {
        $project: {
          quzUserName: { $arrayElemAt: ["$userquizzes.name", 0] },
          quizId: 1,
          score: 1,
          name: 1,
          questions: 1,
        },
      },
    ]);
    return quiz;
  } catch (error) {
    console.log(error);
    throw "Something went wrong";
  }
};

module.exports = {
  getAllQuestions,
  saveUserQuiz,
  getQuizWithQuesById,
  saveQuizResponse,
  getResponseByQuizId,
};
