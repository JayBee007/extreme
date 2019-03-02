import React, { useState, useRef } from 'react';
import { Form, FormInput, Button } from "shards-react";

import ChatMessage from './ChatMessage';

import client from '../../client';

import './ChatWindow.scss';

const ChatWindow = props => {

  const { messages } = props;
  const chatListEl = useRef(null);
  const [message, setMessage] = useState('');

  const scrollToBottom = () => {
    const chatEl = chatListEl.current;
    chatEl.scrollTop = chatEl.scrollHeight - chatEl.clientHeight;
  }

  const handleSubmit = async e => {
    e.preventDefault();
    if(message) {
      const messagesService = client.service('messages');
      await messagesService.create({text: message})
      setMessage('');
      scrollToBottom();
    }
  }

  const handleChange = e => {
    setMessage(e.target.value)
    console.log('chat', chatListEl)
  }

  return (
    <div className="chat-window">
        <ul className="chat-window_list" ref={chatListEl}>
          {messages.map(message => (
            <li className="chat-window_list-item" key={message.id}>
              <ChatMessage message={message} />
            </li>
          ))}
        </ul>
        <div className="chat-window_form">
          <Form inline={true} onSubmit={handleSubmit}>
            <FormInput
              placeholder="Enter message..." 
              className="chat-window_form-input"
              onChange={handleChange}
              value={message}
            />
            <Button type="submit">
              Send
            </Button>
          </Form>
        </div>
    </div>
  )
}

export default ChatWindow;