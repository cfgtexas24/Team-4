const express = require('express');
const WebSocket = require('ws');

const app = express();
const server = require('http').createServer(app);
const wssA = new WebSocket.Server({ server });

const clientsA = new Set();

wssA.on('connection', (ws) => {
    clientsA.add(ws);
    console.log('New client connected to Server A');

    ws.on('message', (message) => {
        // Forward message to Server B
        const forwardMessage = JSON.stringify({ server: 'A', message });
        sendToOtherServer(forwardMessage);
    });

    ws.on('close', () => {
        clientsA.delete(ws);
        console.log('Client disconnected from Server A');
    });
});

// Function to send messages to Server B
const sendToOtherServer = (message) => {
    // Implement your logic to send the message to Server B (if needed)
};

server.listen(4000, () => {
    console.log('Server A is listening on ws://localhost:4000');
});
