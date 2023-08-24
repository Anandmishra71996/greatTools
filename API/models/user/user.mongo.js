const mongoose = require('mongoose');

const UserSchema=new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true
    },
    source:{
        type:String,
        required:true
    },
    credits:{
        type:Number,
        required:true
    }
},
{
    timestamp:true
}
);
module.exports = mongoose.model('User',UserSchema)