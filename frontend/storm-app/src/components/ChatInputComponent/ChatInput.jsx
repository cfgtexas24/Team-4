import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import "react-chat-elements/dist/main.css"
import { Button, InputGroup } from "react-bootstrap";
import ChatStream from '../ChatStreamComponent/ChatStream';
import { useState } from 'react';

function ChatInput({onSendMessage}) {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSendMessage(["You", input]);
      setInput(''); 
    }
  };

    return(
        <form onSubmit={handleSubmit} className='d-flex '>
            <input className='flex-grow-1 rounded' value={input}
        onChange={(e) => setInput(e.target.value)} placeholder="Type here..."/>
            <button type="submit">Send</button>
        </form>
    )
}

export default ChatInput; 