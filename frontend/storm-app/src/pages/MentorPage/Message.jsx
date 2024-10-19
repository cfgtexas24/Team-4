// Message.jsx
import React from 'react';
const Message = ({ message }) => {
  return (
    <li className="message">
      <span className="sender">{message.sender}:</span>
      <span className="content">{message.content}</span>
      <span className="timestamp">{message.timestamp}</span>
    </li>
  );
};
export default Message;