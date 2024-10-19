import React, { useEffect, useState } from 'react';
// import './MentorPage.css'; // Optional for styling

function MentorPage() {
    const [messages, setMessages] = useState([]); // Store chat messages
    const [input, setInput] = useState(''); // Store current input
    const [socket, setSocket] = useState(null); // WebSocket connection

    useEffect(() => {
        // Create WebSocket connection
        const socket = new WebSocket('ws://localhost:8080'); // Update with your server address

        // Set up event listeners
        socket.onopen = () => {
            console.log('WebSocket connection established');
        };

        socket.onmessage = (event) => {
            const message = JSON.parse(event.data); // Assuming messages are in JSON format
            setMessages((prevMessages) => [...prevMessages, message]); // Add new message to state
        };

        socket.onclose = () => {
            console.log('WebSocket connection closed');
        };

        // Store the socket instance in state
        setSocket(socket);

        // Clean up on component unmount
        return () => {
            socket.close();
        };
    }, []);

    // Handle sending messages
    const sendMessage = () => {
        if (input && socket) {
            const message = { text: input, sender: 'mentor' }; // Add sender identifier
            socket.send(JSON.stringify(message)); // Send message as JSON
            setInput(''); // Clear input field
        }
    };

    return (
        <div className="mentor-chat-container">
            <h1>Mentor Chat</h1>
            <div className="chat-box">
                {messages.map((msg, index) => (
                    <div key={index} className={`chat-message ${msg.sender === 'mentor' ? 'sent' : 'received'}`}>
                        {msg.text}
                    </div>
                ))}
            </div>
            <div className="input-container">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
}

export default MentorPage;
