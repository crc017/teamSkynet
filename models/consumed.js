 const mongoose = require("mongoose");
 const Schema = mongoose.Schema;

const consumedSchema = new Schema({
    username: {type: String, required: true},
    date: {type: Date, required: true },
    caloriesConsumed: {type: Number, required:true }
});

const Consumed = mongoose.model("Consumed", consumedSchema);     
module.exports = Consumed;


