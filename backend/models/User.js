const mongoose=require("mongoose");


// const {Schema}=mongoose;


const userSchema = new mongoose.Schema({
    username: {
      type: String,
      unique: true,
      require:true
    },
    password: { 
        type: String,
        require:true
     },
    fullname: { type: String },
    email: {
      type: String,
      unique: true
    },
    
  
  });

  module.exports =mongoose.model("user",userSchema);

