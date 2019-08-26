import React from 'react';
import { StackActions, NavigationActions } from 'react-navigation';
import { Button } from 'react-native';

import Container from '../../components/Container';
import Text from '../../components/Text';
import Card from '../../components/Card';
import Header from '../../components/Header';

const GameOver = props => {
  const { navigation } = props;

  const guessedNumber = navigation.getParam('guessedNumber');
  const rounds = navigation.getParam('rounds');

  const handlePress = () => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Home' })],
    });
    navigation.dispatch(resetAction);
  };

  return (
    <Container>
      <Header title="Guess the number" />
      <Container padding={10}>
        <Card>
          <Text>Your guessed number is: {guessedNumber}</Text>
          <Text>It took {rounds} guesses</Text>
          <Button title="New Game" onPress={handlePress} />
        </Card>
      </Container>
    </Container>
  );
};

GameOver.navigationOptions = {
  header: null,
};

export default GameOver;
