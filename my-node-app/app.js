// Import the express library
const express = require('express');
const app = express();

// Define a route
app.get('/', (req, res) => {
    res.send('Hello, World from Express!');
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
