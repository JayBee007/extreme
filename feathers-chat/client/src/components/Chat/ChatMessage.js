import React from 'react';
import day from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';

import './ChatMessage.scss';

day.extend(advancedFormat)

const ChatMessage = props => {

  const { message } = props;
  const { user } = message;
  const date = day(message.updatedAt).format('MMM Do, hh:mm:ss')

  return (
    <div className="chat-message">
      <div className="chat-message_img-container">
        <img src={user.avatar} className="chat-message_img" alt="avatar"/>
      </div>
      <div className="chat-message_text">
        <p className="chat-message_email"><strong>{user.email}</strong> <span className="chat-message_dt">{date}</span></p>
        <p className="chat-message_msg">{message.text}</p>
      </div>
    </div>
  )
}

export default ChatMessage;