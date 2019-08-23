import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.View`
  /* flex: 1; */
  padding: ${({ padding }: { padding: number }) => padding ? padding + 'px': 0};
`;

export default StyledContainer;