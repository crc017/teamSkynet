const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const burnedSchema = new Schema({
   date: {type: Date, required: true },
   caloriesBurned: {type: Number, required:true },
   timeExcercised: {type: Number, required:true }
   });

const users = mongoose.model("Burned", burnedSchema);     
module.exports = mongoose.model('Burned',burnedSchema) ;
