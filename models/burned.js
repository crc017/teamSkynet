const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const burnedSchema = new Schema({
    userid: {type: Number, required: true},
    date: {type: Date, required: true },
    caloriesBurned: {type: Number, required:true },
    timeExcercised: {type: Number, required:true }
});

const Burned = mongoose.model("Burned", burnedSchema);     
module.exports = Burned;
