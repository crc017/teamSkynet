const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  gender: {type:String, required: true },
  birthDate: { type: Date, required: true },
  email: {type:String, required: true},
  userName: {type:String, required: true},
  password: {type:String, required: true},
  height: {type:Number, required: true},
  weight: {type:Number, required: true},
  myGoal: {type:Number, required: true},
  });

const users = mongoose.model("User", userSchema);
module.exports = mongoose.model('User',userSchema) ;

