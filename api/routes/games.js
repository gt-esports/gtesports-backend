const express = require('express');
const { getGameByID, getGameByName, getGamesByType, deleteGameByName, deleteAllGames, createGame, getGames, updateGame, deleteGame } = require('../controllers/gameController');

const router = express.Router();
router.post('/', createGame);         // Create a new game
router.get('/', getGames);            // Get all games
router.get('/name/:name', getGameByName);
router.get('/:id', getGameByID);
router.get('/gameType/:gameType', getGamesByType);
router.patch('/:id', updateGame);       // Update a game by ID
router.delete('/name/:name', deleteGameByName); // Delete a game by name
router.delete('/:id', deleteGame);    // Delete a game by ID
router.delete('/', deleteAllGames);
module.exports = router;
