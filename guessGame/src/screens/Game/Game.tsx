import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Button, Platform, Alert } from 'react-native';

import Container from '../../components/Container';
import Text from '../../components/Text';
import Card from '../../components/Card';

import generateRandomNumber from '../../utils/generateRandomNumber';

const StyledRowView = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

const ButtonView = styled.View`
  width: 100px;
  background: ${({ background }: { background: string }) => background};
`;

const Game = props => {
  const { navigation } = props;
  const number = navigation.getParam('number');
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const [currentGuess, setCurrrentGuess] = useState(
    generateRandomNumber(1, 100, number)
  );

  const nextGuess = (direction: string) => () => {
    const isNotLow = direction === 'lower' && currentGuess < number;
    const isNotHigh = direction === 'greater' && currentGuess > number;

    if (isNotLow || isNotLow) {
      Alert.alert(
        'Wrong choice',
        `Wrong action, your choice is not ${direction} than your chosen number`,
        [{ text: 'Cancel', style: 'cancel' }]
      );
      return;
    }

    if (direction === 'lower') {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }

    const nextGuess = generateRandomNumber(currentLow.current, currentHigh.current, currentGuess);
    setCurrrentGuess(nextGuess);
  };
  return (
    <Container padding={10}>
      <Card elevation={5}>
        <Container style={{ alignItems: 'center', marginBottom: 15 }}>
          <Text style={{ marginBottom: 15 }}>Computer's Guess</Text>
          <Container
            padding={10}
            style={{
              borderRadius: 5,
              borderWidth: 1,
              borderColor: '#5A67D8',
              marginBottom: 15,
            }}
          >
            <Text textAlign="center" fontSize={42}>
              {currentGuess}
            </Text>
          </Container>
        </Container>
        <StyledRowView>
          <ButtonView background="#E53E3E">
            <Button
              title="Lower"
              onPress={nextGuess('lower')}
              color={Platform.OS === 'ios' ? '#fff' : '#E53E3E'}
            />
          </ButtonView>
          <ButtonView background="#68D391">
            <Button
              title="Greater"
              onPress={nextGuess('greater')}
              color={Platform.OS === 'ios' ? '#fff' : '#68D391'}
            />
          </ButtonView>
        </StyledRowView>
      </Card>
    </Container>
  );
};

export default Game;
