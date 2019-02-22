import React, { useState } from 'react';
import {Container, 
        Row, 
        Col, 
        Form, 
        Card, 
        CardBody, 
        CardFooter, 
        Button} from "shards-react";

import UserField from '../../components/Form/UserField';
import PassField from '../../components/Form/PassField';

import { AUTHLOGIN } from '../../constants';

import './Auth.scss';

const Auth = props => {

  const [values, setValues] = useState({
    username:'',
    password: '',
  });
  const { route: { name }} = props; 

  const handleOnChange = (value) => {
    setValues(prevValues => ({
      ...prevValues, ...value
    }))
  }

  return (
    <Container fluid className="fc_container">
      <Row className="fc_container-row">
        <Col sm={{ size: 4,offset: 4 }}>
          <Card className="fc_container-card">
            <CardBody>
              <Form>
                <UserField value={values.username} handleOnChange={handleOnChange}/>
                <PassField value={values.password} handleOnChange={handleOnChange}/>
              </Form>
            </CardBody>
            <CardFooter className="fc_container-card--footer">
              <Button>
                { name === AUTHLOGIN ? 'Login' : 'Signup'}
              </Button>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Auth;