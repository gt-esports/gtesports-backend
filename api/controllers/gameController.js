const Game = require("../models/game");

// Create a game
const createGame = async (req, res) => {
  const game = new Game({
    name: req.body.name,
    gameType: req.body.gameType,
    discordLink: req.body.discordLink,
    imageLink: req.body.imageLink,
  });
  try {
    const newGame = await game.save();
    res.status(201).json({ newGame });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all games
const getGames = async (req, res) => {
  try {
    const games = await Game.find();
    res.status(200).json(games);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// get game by id
const getGameByID = async (req, res) => {
  try {
    const game = await Game.findById(req.params.id);
    if (game == null) {
      return res.status(404).json({ message: "Game could not be found" });
    }
    res.status(200).json(game);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// get game by name
const getGameByName = async (req, res) => {
  try {
    const games = await Game.find({ name: req.params.name });
    res.status(200).json(games);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get Game by game type
const getGamesByType = async (req, res) => {
  try {
    const games = await Game.find({ gameType: req.params.gameType });
    res.status(200).json(games);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// Update a game
const updateGame = async (req, res) => {
  try {
    const game = await Game.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!game) return res.status(404).json({ message: "Game not found" });
    res.status(200).json(game);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const mongoose = require("mongoose");

const deleteGame = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid game ID" });
  }
  try {
    const game = await Game.findByIdAndDelete(id);
    if (!game) return res.status(404).json({ message: "Game not found" });
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete all
const deleteAllGames = async (req, res) => {
  try {
    await Game.deleteMany({});
    res.status(204).json({ message: "All games deleted" });
  } catch (err) {
    res.status(500).json({ messge: err.message });
  }
};

const deleteGameByName = async (req, res) => {
  try {
    const game = await Game.findOneAndDelete({ name: req.params.name });
    if (!game) return res.status(404).json({ message: "Game not found" });
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  deleteGameByName,
  createGame,
  getGames,
  updateGame,
  deleteGame,
  deleteAllGames,
  getGameByID,
  getGameByName,
  getGamesByType,
};
