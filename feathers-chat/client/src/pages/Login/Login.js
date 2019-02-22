import React from 'react';
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


import './Login.scss';

const Login = props => {

  return (
    <Container fluid className="fc_container">
      <Row className="fc_container-row">
        <Col sm={{ size: 4,offset: 4 }}>
          <Card className="fc_container-card">
            <CardBody>
              <Form>
                <UserField />
                <PassField />
              </Form>
            </CardBody>
            <CardFooter className="fc_container-card--footer">
              <Button>Login</Button>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Login;