const express = require('express');
const event = new Date();

// express app
const app = express();

// routes
app.get('/', function (req, res) {
    res.send('<h1>Hello, World!</h1>');
})

app.get('/time', function (req, res) {
    res.send(`<h4>${event.toISOString()}</h4>`);
})

app.listen(process.env.port || 8080);