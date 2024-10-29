const express = require('express')
const router = express.Router()
const Game = require('../models/game')

// getGame function
async function getGame(req, res, next) {
    let game
    try {
        game = await Game.findById(req.params.id)
        if (game == null) {
            return res.status(404).json({ message: "Cannot find game" })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.game = game
    next()
}   

// get all games
router.get('/', async (req, res) => {
    try {
        const games = await Game.find()
        res.status(200).json({games})
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// get one game
router.get('/:id', getGame, (req, res) => {
    res.send(res.game)
})

// add a game to the db
router.post('/', async (req, res) => {
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
})
// update games
router.patch('/:id', getGame, async (req, res) => {
    if (req.body.name != null) {
        res.game.name = req.body.name
    }
    if (req.body.discordLink != null) {
        res.game.discordLink = req.body.discordLink
    }
    if (req.body.imageLink != null) {
        res.game.imageLink = req.body.imageLink
    }

    try {
        const updatedGame = await res.game.save();
        res.json(updatedGame)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})
// delete a game
router.delete('/:id', getGame, async (req, res) => {
    try {
        await res.game.deleteOne();
        res.json({ message: "Game removed"})
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})


module.exports = router