import React from 'react';
import styled from 'styled-components';
import { StyleSheet } from 'react-native';

const StyledTextInput = styled.TextInput`
  border-bottom-width: ${StyleSheet.hairlineWidth};
  font-size: 22px;
  padding: 5px 10px;
  max-width: 48px;
  align-self: center;
`;

export default StyledTextInput;
