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

api.delete('/api/notes/:id', (req, res) => {
    const { id } = req.params;
    readFromFile('./db/db.json')
        .then((data) => {
            data = JSON.parse(data).filter(data => data.id == id);
            const newData = writeToFile('./db/db.json', data);
            res.status(200).json(newData);
        })
        .catch((error) => console.log(error));
})

module.exports = api;