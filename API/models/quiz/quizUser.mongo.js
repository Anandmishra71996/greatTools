const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema(
  {
    name: String,
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
module.exports = mongoose.model("userQuiz", quizSchema);
