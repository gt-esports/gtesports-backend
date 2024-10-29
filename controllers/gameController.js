const Game = require('../models/game');

// Create a game
const createGame = async (req, res) => {
    const game = new Game({
        name: req.body.name,
        discordLink: req.body.discordLink,
        imageLink: req.body.imageLink
    })
    try {
        const newGame = await game.save()
        res.status(201).json({newGame})
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
};

// Get all games
const getGames = async (req, res) => {
  try {
    const games = await Game.find();
    res.status(200).json(games);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a game
const updateGame = async (req, res) => {
  try {
    const game = await Game.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!game) return res.status(404).json({ message: 'Game not found' });
    res.status(200).json(game);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a game
const deleteGame = async (req, res) => {
  try {
    const game = await Game.findByIdAndDelete(req.params.id);
    if (!game) return res.status(404).json({ message: 'Game not found' });
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete all
const deleteAllGames = async(req, res) => {
    try {
        await Game.deleteMany({});
        res.status(200).json({ message: 'All games deleted' });
    } catch (err) {
        res.status(500).json({ messge: err.message})
    }
}
module.exports = {
  createGame,
  getGames,
  updateGame,
  deleteGame,
  deleteAllGames,
};
