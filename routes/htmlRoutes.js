const htmlPath = require('express').Router();
const path = require('path');
// route displaying all saved notes
htmlPath.get('/notes', (req, res) =>
res.sendFile(path.join(__dirname, '../public/notes.html'))
);
//homepage route displaying index page
htmlPath.get('/', (req, res) =>
res.sendFile(path.join(__dirname, '../public/index.html'))
);


module.exports = htmlPath;