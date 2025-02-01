import mongoose from "mongoose";

const captainSchema = new mongoose.Schema({

    fullname:{
        firsname:{
            type:String,
            required:true,
            minLength:[3,"Firstname must be at least 3 characters long"]
        },
        lastname:{
            type:String,
            minLength:[3,"Lastname must be at least 3 characters long"]
        }
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowecase:true
    },

    password:{
        type:String,
        required:true,
        minLength:[3,"password must be at least 3 characters long"]
    },

    socketId:{
        type:String,
        
    },
    status:{
        type:String,
        enum:["active","inactive"],
        default:"inactive"
    },

    vechle:{
        color:{
        type:String,
        required:true,
        minLength:[3,'color must be at least 3 character loing']
    },

    plate:{
        type:String,
        required:true,
        minLength:[3,"plate must be at least 3 character long"]
    },

    capacity:{
        type:Number,
        required:true,
        minLength:[1,'Capacity must be at least 1 charcater long']
    },

    vechleType:{
        type:String,
        required:true,
        enum:["car","motorcycle",'auto']
    }


    },

    location:{
      lat:{
        type:Number
      },
      lng:{
        type:Number
      },

    }

})


captainSchema.methods.genreateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });
  return token;
};

captainSchema.methods.isPasswordCorrect = async function (passwword) {
  return await bcrypt.compare(passwword, this.password);
};

captainSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});



const Captain = mongoose.model("Captain",captainSchema) 

export { Captain }