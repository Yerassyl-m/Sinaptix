const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(bodyParser.json());

let users = [];

app.post('/api/register', (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    res.status(201).json({ message: 'User registered successfully', user: newUser });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
