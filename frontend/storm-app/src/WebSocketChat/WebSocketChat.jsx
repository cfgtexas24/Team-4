import React, { useEffect, useState } from 'react';

const WebSocketChat = ("ws://localhost:4000") => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    let socket;

    useEffect(() => {
        // Create WebSocket connection
        socket = new WebSocket("ws://localhost:4000");

        // Listen for messages
        socket.onmessage = (event) => {
            const newMessage = event.data;
            setMessages((prevMessages) => [...prevMessages, newMessage]);
        };

        // Cleanup on unmount
        return () => {
            socket.close();
        };
    }, [serverUrl]);

    const handleSendMessage = () => {
        if (input.trim()) {
            socket.send(input);
            setInput('');
        }
    };

    return (
        <div>
            <div>
                {messages.map((msg, index) => (
                    <div key={index}>{msg}</div>
                ))}
            </div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
            />
            <button onClick={handleSendMessage}>Send</button>
        </div>
    );
};

export default WebSocketChat;
