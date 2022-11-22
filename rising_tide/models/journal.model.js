const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// const dateSchema= new Schema({
//     day:{type: Number, required: true},
//     month:{type: String, required: true},
//     year:{type: Number, required: true}
// });
const journalSchema = new Schema(
  {
    freeReponse: { type: String, required: true },
    moodTracker: { type: [Boolean], required: true },
    date: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

const journal = mongoose.model("journal", journalSchema);
module.exports = journal;
