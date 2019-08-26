import React from 'react';
import styled from 'styled-components';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { SafeAreaView } from 'react-native';

const StyledHeaderContainer = styled.View`
  background-color: #553c9a;
  min-height: ${() => getStatusBarHeight()};
  text-align: center;
  padding: 20px;
  align-items: center;
  width: 100%;
`;

const StyledHeaderText = styled.Text`
  font-size: 20px;
  font-weight: 500;
  color: white;
  font-family: "OpenSans-Bold";
`;

const Header = ({ title }: { title: string }) => (
  <SafeAreaView>
    <StyledHeaderContainer>
      <StyledHeaderText>{title}</StyledHeaderText>
    </StyledHeaderContainer>
  </SafeAreaView>
);

export default Header;
