// ChatWindow.jsx
import React, { useContext } from 'react';
import Message from './Message';
import { ChatContext } from '../context/ChatContext';
const ChatWindow = () => {
  const { messages } = useContext(ChatContext);
  return (
    <div className="chat-window">
      <h2>Chat History</h2>
      <ul>
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </ul>
    </div>
  );
};
export default ChatWindow;