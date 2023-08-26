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
  increaseCreditByUserId:async (userId) =>{
    try {
      console.log('increase credit')
      let user = await User.findOne({userId:userId });
      console.log(user,'user increse credit')
      if(user){
       await user.updateOne({credits:user.credits+2})
      }
    } catch (error) {
      console.log(error)
    }
   
  },
  getUserDetails : async (userId) =>{
    try {
      let user = await User.findOne({ userId: userId });
    if(user){
      return user;
    }else{
      return false;
    }
    } catch (error) {
     throw error 
    }
    
  }
};
module.exports=user