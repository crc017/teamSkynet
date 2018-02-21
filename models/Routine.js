 const mongoose = require("mongoose");
 const Schema = mongoose.Schema;

const routineSchema = new Schema({
    userName: {type: String, required: true},
    title: {type: String, required: true},
    reps: {type: String, required: true},
    date: {type: Date, required: true },
    caloriesBurned: {type: Number, required:false }
});

const Routine = mongoose.model("Routine", routineSchema);     
module.exports = Routine;


