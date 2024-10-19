import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import "react-chat-elements/dist/main.css"
import { MessageList } from "react-chat-elements"

function ChatStream({messages}) {
    if (messages === undefined) {
        messages = [["You", "hi"], ["Mentor", "hello"], ["You", "how are you"], ["Mentor", "good"], ["You", "bye"]];
    }

    const oldmessages = [["You", "hi"], ["Mentor", "hello"], ["You", "how are you"], ["Mentor", "good"], ["You", "bye"]];
    
    return(
        <MessageList
            className='message-list'
            lockable={true}
            toBottomHeight={'100%'}
            dataSource={messages.map((message) => (
                {position: message[0] === "You" ? "right" : "left",
                type: "text",
                title: message[0],
                text: message[1]
                }
                )
            )}
        />
    )
}

export default ChatStream; 