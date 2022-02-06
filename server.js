const express = require('express');
const htmlRoute = require('./routes/htmlRoutes');
const apiRoute = require('./routes/apiRoutes')


const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use(htmlRoute);
app.use(apiRoute);


// Listening to PORT
app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`)
);