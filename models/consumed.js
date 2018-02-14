 const mongoose = require("mongoose");
 const Schema = mongoose.Schema;

const consumedSchema = new Schema({
    userid: {type: Number, required: true},
    date: {type: Date, required: true },
    calories: {type: Number, required:true }
});

const Consumed = mongoose.model("Consumed", consumedSchema);     
module.exports = Consumed;


