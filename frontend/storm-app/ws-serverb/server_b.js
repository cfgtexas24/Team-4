const express = require('express');
const WebSocket = require('ws');

const app = express();
const server = require('http').createServer(app);
const wssB = new WebSocket.Server({ server });

const clientsB = new Set();

wssB.on('connection', (ws) => {
    clientsB.add(ws);
    console.log('New client connected to Server B');

    ws.on('message', (message) => {
        // Forward message to Server A
        const forwardMessage = JSON.stringify({ server: 'B', message });
        sendToOtherServer(forwardMessage);
    });

    ws.on('close', () => {
        clientsB.delete(ws);
        console.log('Client disconnected from Server B');
    });
});

// Function to send messages to Server A
const sendToOtherServer = (message) => {
    // Implement your logic to send the message to Server A (if needed)
};

server.listen(5000, () => {
    console.log('Server B is listening on ws://localhost:5000');
});
