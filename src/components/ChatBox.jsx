import React from 'react'
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import config from "../deps/config";
import ActionProvider from "../deps/ActionProvider";
import MessageParser from "../deps/MessageParser";
import "./chatBox.css";

const ChatBox = () => {
  return (
    <div>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  )
}

export default ChatBox
