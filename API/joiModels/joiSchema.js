const Joi = require("joi");

const festivalSchema = Joi.object({
  orderId: Joi.string().allow(null), // Optional string, allowing null
  festName: Joi.string().required(), // Required string
  name: Joi.string().allow(null), // Optional string, allowing null
  mainImg: Joi.string().required(), // Required string
  backgroundColor: Joi.string().allow(null), // Optional string, allowing null
  shayari: Joi.array().items(Joi.string()).allow(null), // Optional array of strings, allowing null
  movingMessage: Joi.string().allow(null), // Optional string, allowing null
  extraImg1: Joi.string().allow(null), // Optional string, allowing null
  extraImg2: Joi.string().allow(null), // Optional string, allowing null
  extraImg3: Joi.string().allow(null), // Optional string, allowing null
});

module.exports = festivalSchema;
