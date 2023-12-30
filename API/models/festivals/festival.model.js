const FestivalModel = require("./festival.mongo");

module.exports = {
  addNewFestival: async (body) => {
    try {
      await FestivalModel.create(body);
    } catch (error) {
      console.log(error);
      throw "error in saving festival";
    }
  },
  getFestivalByName: async (festName) => {
    try {
      const festival = await FestivalModel.find({ festName: festName });
      if (festival) {
        return festival;
      } else {
        throw `${festName} does not exist`;
      }
    } catch (err) {
      throw err;
    }
  },
};
