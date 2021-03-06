const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  gender: {type:String, required: true },
  birthDate: { type: Date, required: true },
  email: {type:String, required: true},
  userName: {type:String, required: true},
  password: {type:String, required: true},
  height: {type:String, required: true},
  weight: {type:Number, required: true},
  myGoal: {type:Number, required: true},
  image: {type: String, required: false}
  });

const User = mongoose.model("User", UserSchema);
module.exports = User;

