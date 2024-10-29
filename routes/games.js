const express = require('express');
const { deleteAllGames, createGame, getGames, updateGame, deleteGame } = require('../controllers/gameController');

const router = express.Router();
router.post('/', createGame);         // Create a new game
router.get('/', getGames);            // Get all games
router.put('/:id', updateGame);       // Update a game by ID
router.delete('/:id', deleteGame);    // Delete a game by ID
router.delete('/', deleteAllGames);
module.exports = router;
