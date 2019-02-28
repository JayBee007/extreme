import React, {useState, useEffect,useContext } from 'react';
import { Container, Row, Col } from "shards-react";
import { useRouter } from 'react-router5';

import client from '../../client';
import { removeAuthToken } from '../../utils';
import Navbar from '../../components/Navbar'
import {ChatSidebar} from '../../components/Chat';
import AuthContext from '../../Providers/Contexts/auth.context';

import './Chat.scss';

const Chat = props => {

  const [data, setData] = useState({messages: [], users: []});
  const authState = useContext(AuthContext);
  const router = useRouter();

  const authenticateUser = async () => {
    try {
      await client.authenticate();
    }catch (err) {
      router.navigate('auth')
    }
    
  }

  const subscribeToEvents = () => {
    const messages = client.service("messages");
    const users = client.service("users");
    
    client.on('authenticated', async token => {
        const messageData = await messages.find({ query: { $sort: { createdAt: -1 }, $limit: 2 }});
        const userData = await users.find();
        
        setData({
          messages:messageData.data.reverse(),
          users: userData.data,
        })
    })

    client.on('logout', () => {
      authState.logout();
      removeAuthToken();
      router.navigate('auth');
      messages.removeListener();
      users.removeListener();
    })

    users.on('created', user => {
      setData(prevData => ({
        ...prevData,
        users: [...prevData.users, user],
      }));
    });

    messages.on('created', message => {
      setData(prevData => ({
        ...prevData,
        messages: [...prevData.messages, message]
      }));
    })

  }

  useEffect(() => {
    authenticateUser()
    subscribeToEvents()
  },[])
  
  return (
    <Container
      className="chat"
      fluid={true}>
      <Navbar />
      <Container 
        fluid={true}
        className="chat-content"
        >
        <Row className="chat-row">
          <Col md="4" className="chat-sidebar">
            <ChatSidebar users={data.users} />
          </Col>
          <Col md="8">
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Chat;