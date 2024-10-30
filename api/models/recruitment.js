const mongoose = require("mongoose");

const recruitmentSchema = new mongoose.Schema({
  postID: {
    type: String,
    required: true,
    unique: true,
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
    default: null,  
  },
  description: {
    type: String,
    required: true,
  },
  tryoutDate: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("Recruitment", recruitmentSchema);
