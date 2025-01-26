import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({

    fullName:{
        firstName:{
            type: String,
            required: true,
            minlength: [3, "First name must be at least 4 characters long"],
        },
        lastName:{
            type: String,
            minlength: [3, "Last name must be at least 4 characters long"],
        }
    },

    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },

    password:{
        type: String,
        required: true,
        select:false
    },

    socketId:{
        type: String,
    },
});



const User = mongoose.model("User", userSchema);


userSchema.methods.genreateAuthToken = function(){
    const token = jwt.sign({_id:this._id}, process.env.JWT_SECRET, {expiresIn: "1h"});
    return token;
}

userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
}


userSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

export {User}