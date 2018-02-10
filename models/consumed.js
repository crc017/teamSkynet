 const mongoose = require("mongoose");
 const Schema = mongoose.Schema;

const consumedSchema = new Schema({
    date: {type: Date.Now(), required: true },
    calories: {type: Number, required:true }
});

const users = mongoose.model("Consumed", consumedSchema);     
module.exports = mongoose.model('Consumed',consumedSchema) ;


