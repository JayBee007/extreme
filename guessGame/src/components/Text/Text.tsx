import React from 'react';
import styled from 'styled-components';
import { Text } from 'react-native';

const StyledText = styled.Text`
  font-size: ${({ fontSize }: { fontSize: number }) => fontSize || 18};
  font-weight: ${({ fontWeight }: { fontWeight: number }) => fontWeight || 400};
  color: ${({ color }: { color: string }) => color || 'black'};
  text-align: ${({ textAlign }: { textAlign: string }) => textAlign || 'left'};
`;

export default StyledText;
