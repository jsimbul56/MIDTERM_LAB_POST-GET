const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendFile('Hello, world!');
});

app.get('/user', (req, res) => {
    const userId = req.query.id;
    res.send(`User ID is ${userId}`);
});

app.listen(3000, () => {
    console.log('Server is running http://localhost:3000');
});

