const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  gameType: {
    type: String,
    required: true,
    enum: ["comp", "casual"],
    message: 'gameType must be either "comp" or "casual"',
  },
  discordLink: {
    type: String,
    required: true,
  },
  imageLink: {
    type: String,
    required: true,
  },
  dateAdded: {
    type: Date,
    required: false,
    default: Date.now,
  },
});

module.exports = mongoose.model("Game", gameSchema);
