import React, { useState } from 'react';
import {Container, 
        Row, 
        Col, 
        Form, 
        Card, 
        CardBody,
        Button} from "shards-react";

import UserField from '../../components/Form/UserField';
import PassField from '../../components/Form/PassField';
import EmailField from '../../components/Form/EmailField';

import { AUTHLOGIN, AUTHSIGNUP} from '../../constants';

import client from '../../client';

import './Auth.scss';

const Auth = props => {

  const [values, setValues] = useState({
    username:'',
    password: '',
    email: '',
  });
  const { route: { name }} = props; 

  const handleOnChange = (value) => {
    setValues(prevValues => ({
      ...prevValues, ...value
    }))
  }

  const handleSubmit = e => {
    e.preventDefault();
    
    const { username, email, password } = values;
    console.table({username,email,password, name})
    if(email === '' || password === '' ) return;
    
    const login = () => {
      console.log('login')
      return client.authenticate({
        strategy: 'local',
        email,
        password
      })
    }

    if(name === AUTHLOGIN ) {
      console.log('authlogin')
      login().then(() => console.log('logged'));
    
    }else if (name === AUTHSIGNUP) {
      if(username === '') return;
      const users = client.service('users');
      return users.create({username, email, password})
        .then(() => login());
    }
  }

  return (
    <Container fluid className="fc_container">
      <Row className="fc_container-row">
        <Col sm={{ size: 4,offset: 4 }}>
          <Card className="fc_container-card">
            <CardBody>
              <Form onSubmit={handleSubmit}>
                {name === AUTHSIGNUP && (
                  <UserField value={values.username} handleOnChange={handleOnChange}/>
                )}
                  <EmailField value={values.email} handleOnChange={handleOnChange} />
                <PassField value={values.password} handleOnChange={handleOnChange}/>
                <Button type="submit">
                  { name === AUTHLOGIN ? 'Login' : 'Signup'}
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Auth;