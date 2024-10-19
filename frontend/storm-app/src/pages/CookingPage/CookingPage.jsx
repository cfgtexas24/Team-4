import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, ListGroup } from 'react-bootstrap';
import './GroupChat.css'; // Ensure your CSS is imported

const CookingPage = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSend = () => {
    if (message.trim()) {
      // Add user message immediately
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: message, sender: 'User' },
      ]);

      // Clear the input field
      setMessage('');

      // Generate a response and set it to appear after 2 seconds
      setTimeout(() => {
        const response = generateResponse(message);
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: response, sender: 'anon_xxx' },
        ]);
      }, 1000); // 2000 milliseconds = 2 seconds
    }
  };

  const generateResponse = (input) => {
    const responses = {
      "hello": "Hey, how are you doing?",
      "how are you": "I'm doing great!",
      // Add more responses as needed
    };
    // Return a default response if no match found
    return responses[input.toLowerCase()] || "Cool!!";
  };

  return (
    <Container fluid className="group-chat-container">
      <Row className="flex-grow-1"> {/* Ensures Row takes full height */}
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
                <strong>{msg.sender}:</strong> {msg.text}
              </div>
            ))}
          </div>
          <Form className="input-form">
            <Form.Group controlId="messageInput" className="mb-0">
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

export default CookingPage;
