const express = require('express');
const path = require('path');
const htmlRoute = require('./routes/htmlRoutes');
const fs = require('fs');

const PORT = 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use(htmlRoute)


// Listening to PORT
app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`)
);