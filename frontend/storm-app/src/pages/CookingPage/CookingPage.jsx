import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, ListGroup } from 'react-bootstrap';
import './GroupChat.css'; // Create a CSS file for custom styles

const GroupChat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSend = () => {
    if (message.trim()) {
      // Hardcoded responses based on user input
      const response = generateResponse(message);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: message, sender: 'User' },
        { text: response, sender: 'Bot' },
      ]);
      setMessage('');
    }
  };

  const generateResponse = (input) => {
    // Example hardcoded responses
    const responses = {
      hello: "Hi there! How can I help you?",
      howAreYou: "I'm just a bot, but I'm doing great!",
      // Add more responses as needed
    };

    const lowerInput = input.toLowerCase();
    return responses[lowerInput] || "I don't understand that.";
  };

  return (
    <Container fluid className="group-chat-container">
      <Row>
        <Col md={3} className="sidebar">
          <h4>Channels</h4>
          <ListGroup>
            <ListGroup.Item>General</ListGroup.Item>
            <ListGroup.Item>Help</ListGroup.Item>
            <ListGroup.Item>Random</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={9} className="chat-area">
          <h4>Group Chat</h4>
            <div className="chat-window">
              {messages.map((msg, index) => (
                <div key={index} className={`message ${msg.sender.toLowerCase()}`}>
                  <div className={msg.sender.toLowerCase() === 'user' ? 'user-message' : 'bot-message'}>
                    <strong>{msg.sender}:</strong> {msg.text}
                  </div>
                </div>
              ))}
            </div>
          <Form className="input-form">
            <Form.Group controlId="messageInput">
              <Form.Control
                type="text"
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Form.Group>
            <Button onClick={handleSend}>Send</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default GroupChat;
