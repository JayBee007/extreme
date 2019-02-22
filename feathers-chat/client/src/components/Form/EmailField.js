import React from 'react';
import {FormGroup, FormInput, InputGroup, InputGroupAddon, InputGroupText } from 'shards-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt } from '@fortawesome/free-solid-svg-icons'

const UserField = props => {

  const { value, handleOnChange} = props;

  const handleChange = e => {
    handleOnChange({
      [e.target.name]: e.target.value
    })
  }

  return (
    <FormGroup>
      <label htmlFor="#email">Email</label>
      <InputGroup>
        <InputGroupAddon type="prepend">
          <InputGroupText>
            <FontAwesomeIcon icon={faAt}/>
          </InputGroupText>
        </InputGroupAddon>
        <FormInput 
          onChange={handleChange}
          type="email"
          name="email"
          id="#email" 
          placeholder="Email" 
          value={value}/>
      </InputGroup>
    </FormGroup>
  )
}

export default UserField;