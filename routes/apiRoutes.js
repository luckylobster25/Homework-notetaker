const api = require('express').Router();
const { readFromFile, writeToFile, readAndAppend } = require('../helpers/helper');
const uuid = require('../helpers/uuid');
// get data from database file that stored user input.
api.get('/api/notes', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});
// stored user input front-end data into back-end database file
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
// delete route by id, tested and working
api.delete('/api/notes/:id', (req, res) => {
    const { id } = req.params;
    readFromFile('./db/db.json')
        .then((data) => {
            data = JSON.parse(data).filter(data => data.id != id);
            const newData = writeToFile('./db/db.json', data);
            res.status(200).json(newData);
        })
        .catch((error) => console.log(error));
})

module.exports = api;