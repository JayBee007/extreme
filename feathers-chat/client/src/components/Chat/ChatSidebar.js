import React from 'react';
import { Button } from "shards-react";

import client from '../../client'

import './ChatSidebar.scss';

const ChatSidebar = props => {

  const { users } = props;

  const handleClick = () => {
    client.logout()
  }
  return (
    <div className="sidebar">
      <p className="sidebar-user_p">
        <span className="sidebar-user__length">{users.length}</span> users</p>
      <ul className="sidebar-list">
        {users.map(user => (
          <li key={user.id} className="sidebar-list_item">
            <div className="sidebar-list_image">
              <img className="sidebar-list_avatar" src={user.avatar} alt="user avatar"/>
            </div>
            <p className="sidebar-list_email">{user.email}</p>
          </li>
        ))}
      </ul>
      <Button 
        onClick={handleClick}
        className="sidebar-btn" 
        theme="success"
      >
        Sign Out
      </Button>
    </div>
  )
}

export default ChatSidebar;