import React, { useState, useContext } from 'react';
import { useRouter } from 'react-router5';
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

import { AUTHLOGIN, AUTHSIGNUP} from '../../appConstants';

import client from '../../client';

import AuthContext from '../../Providers/Contexts/auth.context'

import './Auth.scss';

const Auth = props => {

  const { route: { name }} = props; 

  const [values, setValues] = useState({
    username:'',
    password: '',
    email: '',
  });

  const authState = useContext(AuthContext);

  const router = useRouter();

  const handleOnChange = (value) => {
    setValues(prevValues => ({
      ...prevValues, ...value
    }))
  }

  const handleSubmit = e => {
    e.preventDefault();
    
    const { username, email, password } = values;
    
    if(email === '' || password === '' ) return;
    
    const login = async () => {
      
      await client.authenticate({
        strategy: 'local',
        email,
        password
      }).then(res =>  {
        authState.login();
        router.navigate('chat');
      })
    }

    if(name === AUTHLOGIN ) {
      login();
    
    }else if (name === AUTHSIGNUP) {
      if(username === '') return;
      const users = client.service('users');
      return users.create({username, email, password})
        .then(() => login())
        .catch(err => console.log(err));
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