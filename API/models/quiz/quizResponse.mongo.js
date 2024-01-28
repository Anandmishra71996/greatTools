const mongoose = require("mongoose");

const quizResponseSchema = new mongoose.Schema(
  {
    name: String,
    quizId: { type: mongoose.Schema.Types.ObjectId, ref: "userQuiz" },
    score: Number,
    questions: [
      {
        questionId: { type: mongoose.Schema.Types.ObjectId, ref: "question" },
        optionId: Number,
      },
    ],
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("userQuizResponse", quizResponseSchema);
