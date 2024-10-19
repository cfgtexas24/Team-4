import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import "react-chat-elements/dist/main.css"
import { Input } from 'react-chat-elements'

function ChatInput() {
    return(
        <Input
        placeholder="Type here..."
        multiline={true}
      />
    )
}

export default ChatInput; 