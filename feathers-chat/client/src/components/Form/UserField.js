import React from 'react';
import {FormGroup, FormInput, InputGroup, InputGroupAddon, InputGroupText } from 'shards-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const UserField = props => {

  const { value, handleOnChange} = props;

  const handleChange = e => {
    handleOnChange({
      [e.target.name]: e.target.value
    })
  }

  return (
    <FormGroup>
      <label htmlFor="#username">Username</label>
      <InputGroup>
        <InputGroupAddon type="prepend">
          <InputGroupText>
            <FontAwesomeIcon icon={faUser}/>
          </InputGroupText>
        </InputGroupAddon>
        <FormInput 
          onChange={handleChange}
          name="username"
          id="#username" 
          placeholder="Username" 
          value={value}/>
      </InputGroup>
    </FormGroup>
  )
}

export default UserField;