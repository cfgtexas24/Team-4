import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import "react-chat-elements/dist/main.css"
import { MessageList } from "react-chat-elements"
import { useEffect, useState } from 'react';

function ChatStream({messages, setMessages}) {
    const mentorResponses = [
        "Hi there! How can I help you today?",
        "I can help you with that. Click on the exclamation mark button on the dashboard to report a housing emegency.",
        "Let me know if I can help in any other way!"
    ];

    // State to keep track of the response index
    const [responseIndex, setResponseIndex] = useState(0);

    // Initialize default messages if none exist
    useEffect(() => {
        if (messages.length === 0) {
            setMessages([["You", "Hello Mentor"], ["Mentor", "Hello Mentee! Is there any way I can help you right now?"], ["You", "Yes, are you available to chat?"], ["Mentor", "Yes"], ["You", "Awesome!"]]);
        }
    }, [messages, setMessages]);

    // Respond from "Mentor" after a message from "You" is added
    useEffect(() => {
        if (messages.length > 0 && messages[messages.length - 1][0] === "You") {
            // Trigger response after 2 seconds
            const mentorResponse = setTimeout(() => {
                // Get the next response based on the current index
                const newMessage = ["Mentor", mentorResponses[responseIndex]];

                // Update the messages with the new Mentor message
                setMessages([...messages, newMessage]);

                // Cycle through the response index (0 -> 1 -> 2 -> 0 -> ...)
                setResponseIndex((prevIndex) => (prevIndex + 1) % mentorResponses.length);
            }, 2000);

            // Clean up the timeout when the component unmounts
            return () => clearTimeout(mentorResponse);
        }
    }, [messages, responseIndex, mentorResponses, setMessages]);
    
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