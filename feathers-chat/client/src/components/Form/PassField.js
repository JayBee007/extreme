import React from 'react';
import {FormGroup, FormInput, InputGroup, InputGroupAddon, InputGroupText } from 'shards-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'

const UserField = props => {

  const { value, handleOnChange } = props;

  const handleChange = e => {
    handleOnChange({
      [e.target.name]: e.target.value
    })
  }

  return (
    <FormGroup>
      <label htmlFor="#password">Password</label>
      <InputGroup>
        <InputGroupAddon type="prepend">
          <InputGroupText>
            <FontAwesomeIcon icon={faLock}/>
          </InputGroupText>
        </InputGroupAddon>
        <FormInput 
          onChange={handleChange}
          name="password"
          type="password"
          id="#password" 
          placeholder="Password" 
          value={value}/>
      </InputGroup>
    </FormGroup>
  )
}

export default UserField;