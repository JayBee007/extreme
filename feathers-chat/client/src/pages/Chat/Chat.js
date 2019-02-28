import React, {useState, useEffect } from 'react';
import { Container, Row, Col } from "shards-react";
import { useRouter } from 'react-router5';

import client from '../../client'

import Navbar from '../../components/Navbar'

import './Chat.scss';

const Chat = props => {

  const [users, setUsers] = useState([]);
  const router = useRouter();

  const authenticateUser = async () => {
    try {
      await client.authenticate();
    }catch (err) {
      router.navigate('auth')
    }
    
  }

  const subscribeToEvent = () => {
    client.on('authenticated', token => {
        const messages = client.service("messages");
        console.log('messages', messages.find())
    })
  }

  useEffect(() => {
    authenticateUser()
    subscribeToEvent()
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
        <Row>
          <Col md="4">
            {users.length}
          </Col>
          <Col md="8">
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Chat;