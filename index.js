// Dependencies
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');

// Require the database
require('./db');

// Middleware
// extended: false - does not allow nested objects in query strings
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// Routes
require('./routes')(app);

// Catch routes that doesn't exist
app.get('*', (req, res) => {
    res.status(404).json('Sorry, page not found');
});

app.listen(PORT, () => {
    console.log('Listening on port ', PORT);
});