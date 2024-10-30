const mongoose = require("mongoose");

const recruitmentSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  game: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: true,
  },
  tryoutDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("Recruitment", recruitmentSchema);
