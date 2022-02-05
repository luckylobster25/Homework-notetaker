const api = require('express').Router();
const { readFromFile, writeToFile, readAndAppend } = require('../helpers/helper');
const uuid = require('../helpers/uuid');
api.get('/api/notes', (req, res) => 
    readFromFile('.db/db.json').then((data) => 
    res.json(JSON.parse(data))
    )
    .catch((error) => console.log(error))
);

api.post('/api/notes', (req, res) => {
    const { title, text } = req.body;
    const newNote = {
        title,
        text,
        id: uuid(),
    };
    readAndAppend(newNote, './db/db.json');
    res.json(newNote);
})

module.exports = api;