// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Load the data
const data = require('./data.json');

// Create the API
app.get('/api/skills/member', (req, res) => {
    res.send(data.skills.member);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});