const mongoose = require('mongoose');

const HistorySchema=new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    otherChannelId:{
        type:String,
        required:true
    },
    workType:{
        type:String,
        
    }
},
{
    timestamp:true
}
);
module.exports = mongoose.model('history',HistorySchema)