import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import "react-chat-elements/dist/main.css"
import { MessageBox } from "react-chat-elements";

function ChatBox(textMessage, sender) {
    if (sender.equals("You")) {
        position = "right";
    }
    else {
        position = "left";
    }
    
    return(
            <MessageBox
                position={position}
                type={"text"}
                title={sender}
                text={textMessage}
            />
    )
}

export default ChatBox; 