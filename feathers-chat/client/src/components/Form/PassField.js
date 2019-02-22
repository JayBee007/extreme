import React from 'react';
import {FormGroup, FormInput, InputGroup, InputGroupAddon, InputGroupText } from 'shards-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'

const UserField = props => {

  return (
    <FormGroup>
      <label htmlFor="#password">Password</label>
      <InputGroup>
        <InputGroupAddon type="prepend">
          <InputGroupText>
            <FontAwesomeIcon icon={faLock}/>
          </InputGroupText>
        </InputGroupAddon>
        <FormInput type="password" id="#password" placeholder="Password" />
      </InputGroup>
    </FormGroup>
  )
}

export default UserField;