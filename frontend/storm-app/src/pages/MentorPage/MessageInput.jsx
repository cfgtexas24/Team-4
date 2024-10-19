// MessageInput.jsx
import React, { useContext, useState } from 'react';
// MessageInput.jsx (continued)
import { ChatContext } from '../context/ChatContext';
const MessageInput = () => {
  const { sendMessage } = useContext(ChatContext);
  const [messageValue, setMessageValue] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (messageValue.trim()) {
      sendMessage(messageValue);
      setMessageValue(''); // Clear input field after sending message
    }
  };
  return (
    <form className="message-input" onSubmit={handleSubmit}>
      <input
        type="text"
        value={messageValue}
        onChange={(e) => setMessageValue(e.target.value)}
        placeholder="Type your message..."
      />
      <button type="submit">Send</button>
    </form>
  );
};
export default MessageInput;