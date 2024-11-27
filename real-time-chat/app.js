// 1. Import required modules
const express = require('express');    // Express web framework
const http = require('http');          // HTTP module (to create the server)
const socketIo = require('socket.io'); // Socket.io for real-time communication

// 2. Create an Express application
const app = express();

// 3. Create an HTTP server by passing the Express app into it
const server = http.createServer(app);

// 4. Setup Socket.io to work with the server
const io = socketIo(server); 

// 5. Serve static files (for example, HTML, CSS, JS) from the 'public' directory
app.use(express.static('public'));

// 6. Set up a simple route for the homepage (just a placeholder)
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// 7. Listen for incoming socket connections (when a client connects)
io.on('connection', (socket) => {
    console.log('A user connected');

    // 8. Listen for messages from clients and broadcast to all clients
    socket.on('chat message', (msg) => {
        console.log('Message received: ' + msg);
        io.emit('chat message', msg); // Emit the message to all connected clients
    });

    // 9. Handle user disconnect event
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

// 10. Start the server on port 3000
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
