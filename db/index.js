const mongoose = require('mongoose');
const db = mongoose.connection;

// Environement Variables
const mongoURI = process.env.MONGODB_URI || 'mongodb+srv://admin:ysYSegdPtPZkSNDC@cluster0-ijy0t.mongodb.net/bookmark-app';

// Connect to Mongo
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('MongoDB connection established: ', mongoURI)
    );

// Error / Disconnection
db.on('error', err => console.log(err.message + ' is Mongodb not running?'));
db.on('disconnected', () => console.log('mongo disconnected'));