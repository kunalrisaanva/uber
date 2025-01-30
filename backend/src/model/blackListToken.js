import mongoose from "mongoose";

const blacklistTokenScheama = new mongoose.Schema({
    token:{
        type:String,
        required:true,
        unique:true
    },

    createAt:{
        type:Date,
        default:Date.now,
        expies:86400 // 24 hours in seconds
    }
})

const BlacklistToken = mongoose.model('BlacklistToken',blacklistTokenScheama);

export  { BlacklistToken };
