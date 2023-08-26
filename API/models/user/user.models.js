const User = require("./user.mongo");

const user = {
  addNewUser: async (data) => {
    try {
      let user = await User.findOne({ userId: data.userId });
      console.log(user,'in Model')
      if (!user) {
        await User.create(data);
        user = await User.findOne({ userId: data.userId });
        return user;
      }
     
      return user;
    } catch (error) {
        console.log(error)
        throw error;
    }
  },
  increaseCreditByUserId:async (data) =>{
    try {
      console.log('increase credit')
      let user = await User.findOne({ userId: data.userId });
      console.log(user,'user increse credit')
      if(user){
       await user.updateOne({credits:credits+2})
      }
    } catch (error) {
      console.log(error)
    }
   
  }
};
module.exports=user