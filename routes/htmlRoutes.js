const htmlPath = require('express').Router();
const path = require('path');

htmlPath.get('/notes', (req, res) =>
res.sendFile(path.join(__dirname, '../public/notes.html'))
);

htmlPath.get('/', (req, res) =>
res.sendFile(path.join(__dirname, '../public/index.html'))
);

module.exports = htmlPath;