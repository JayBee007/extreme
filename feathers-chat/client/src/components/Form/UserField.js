import React from 'react';
import {FormGroup, FormInput, InputGroup, InputGroupAddon, InputGroupText } from 'shards-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const UserField = props => {

  return (
    <FormGroup>
      <label htmlFor="#username">Username</label>
      <InputGroup>
        <InputGroupAddon type="prepend">
          <InputGroupText>
            <FontAwesomeIcon icon={faUser}/>
          </InputGroupText>
        </InputGroupAddon>
        <FormInput id="#username" placeholder="Username" />
      </InputGroup>
    </FormGroup>
  )
}

export default UserField;