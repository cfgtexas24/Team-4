import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import "react-chat-elements/dist/main.css"
import ChatStream from '../../components/ChatStreamComponent/ChatStream'
import ChatInput from '../../components/ChatInputComponent/ChatInput'
import './ChatPage.css'
import { useState } from 'react';
// import { Session, Chatbox } from "@talkjs/react";

// export default function ChatPage() {
//   return (
//     <Session appId="tzN4fSSV" userId="sample_user_alice">
//       <Chatbox conversationId="sample_conversation" />
//     </Session>
//   );
// }

function ChatPage() {
    const [messages, setMessages] = useState([]);

    const handleSendMessage = (message) => {
        setMessages([...messages, message]);
    }

    return(
        <div className='chatPage h-75 d-flex justify-content-end'>
            <ChatStream messages={messages} />
            <ChatInput onSendMessage={handleSendMessage} />
        </div>
    )
}

export default ChatPage; 