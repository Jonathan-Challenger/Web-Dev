const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

// Init app
const app = express();


// Middlewares

// Form data middleware
app.use(bodyParser.urlencoded({ 
    extended: false
}));

// JSON body middleware
app.use(bodyParser.json());

// Cors 
app.use(cors());

// Setup static dir
app.use(express.static(path.join(__dirname, 'public')));

// Connect to database

const db = require('./config/keys').MongoURI;

mongoose.connect(db, { useNewUrlParser: true })
    .then(console.log("MongoDB Connected..."))
    .catch(err => console.log(err));




app.get('/', (req, res) => {
    return res.send("<h1>Hello World</h1>")
});

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Connected to server on port ${PORT}`));
