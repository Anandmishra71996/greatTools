const mongoose = require("mongoose");

const FestivalSchema = new mongoose.Schema(
  {
    orderId: { type: String, required: false },
    festName: { type: String, required: true },
    name: { type: String, required: false },
    mainImg: { type: String, required: true },
    backgroundColor: { type: String, required: false },
    shayari: { type: [String], required: false },
    movingMessage: { type: String, required: false },
    extraImg1: { type: String, required: false },
    extraImg2: { type: String },
    extraImg3: { type: String },
  },
  { timestamps: true }
);

// Create and export the Mongoose model for Festival
const FestivalModel = mongoose.model("Festival", FestivalSchema);
module.exports = FestivalModel;
