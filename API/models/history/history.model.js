const History= require('./history.mongo')
module.exports={
    addNewHistory:async (loggedInId,otherChannelId,workType='Subscribe')=>{
       try {
        console.log(loggedInId,otherChannelId)
        const record={
            userId:loggedInId,
            otherChannelId:otherChannelId,
            workType:workType
        }
        console.log(record)
      await  History.create(record);
       } catch (error) {
        console.log(error)
        return false;
        
       }
      
    },
    getSubscribedChannelIds: async (loggedInId)=>{
        try {
           let ids= await History.find({userId:loggedInId},{
            otherChannelId:1,
            _id:0
           });
          ids= ids.map(i=>i.otherChannelId)
            return ids;
        } catch (error) {
            console.log(error)
        }
    }
}