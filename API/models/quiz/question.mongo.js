const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema(
  {
    questionSerial: {
      type: String,
    },
    question: {
      type: String,
    },
    options: [{ optionId: Number, imageUrl: String, imageName: String }],
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("quizQuestions", questionSchema);
