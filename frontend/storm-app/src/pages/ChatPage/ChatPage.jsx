import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import "react-chat-elements/dist/main.css"
import ChatStream from '../../components/ChatStreamComponent/ChatStream'
import ChatInput from '../../components/ChatInputComponent/ChatInput'
import './ChatPage.css'

function ChatPage() {

    return(
        <div className='chatPage'>
            <ChatStream />
            <ChatInput />
        </div>
    )
}

export default ChatPage; 