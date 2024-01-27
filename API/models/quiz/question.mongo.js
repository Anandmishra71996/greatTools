const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema(
  {
    questionSerial: {
      type: String,
    },
    Question: {
      type: String,
    },
    Options: [{ optionId: Number, imageUrl: String, imageName: String }],
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("quizQuestions", questionSchema);
