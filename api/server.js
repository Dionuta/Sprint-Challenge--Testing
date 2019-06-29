const express = require('express');
const server = express();

const Games = require("../games/gamesModel");

server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({ message: "testing api is ready" });
});

server.get('/games', (req, res) => {
  Games.getAll()
    .then(games => {
      res.status(200).json(games);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

server.post('/games', (req, res) => {
  const body = req.body;
  if (body.title && body.genre) {
    db('games').insert(body)
    .then(ids => {
      res.status(201).json(ids);
    })
    .catch(err => {
      res.status(500).json({ error: 'Failed to add game' })
    })
  } else {
    res.status(422).json({ error: 'Missing Title and/or genre' });
  }
})

module.exports = server;