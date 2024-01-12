const Joi = require("joi");
const festivalModel = require("../../models/festivals/festival.model");
const { festivalSchema } = require("../../joiModels/joiSchema");

const festivalController = {
  createNewFestival: async (req, res) => {
    try {
      let body = req.body;
      await Joi.valid(body, festivalSchema);
      await festivalModel.addNewFestival(body);
      res.status(200).json({
        isSuccess: true,
        data: {},
        message: "Festival Saved Successfully",
      });
    } catch (err) {
      console.log(err);
      res.status(400).json({
        isSuccess: false,
        message: err.message || "Something went wrong",
      });
    }
  },
  getFestivalByName: async (req, res) => {
    try {
      const festName = req.params.name;
      if (festName) {
        const festivalData = await festivalModel.getFestivalByName(festName);
        res.status(200).json({
          isSuccess: true,
          data: festivalData,
          message: "Festival fetched successfully",
        });
      }
    } catch (err) {
      res.status(400).json({
        isSuccess: false,
        message: err.message || "Festival not found",
      });
    }
  },
};
module.exports = festivalController;
