import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import {
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  Alert,
} from 'react-native';

import Header from '../../components/Header';
import Container from '../../components/Container';
import Text from '../../components/Text';
import Card from '../../components/Card';
import TextInput from '../../components/TextInput';

const StyledRowView = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

const ButtonView = styled.View`
  width: 100px;
  background: ${({ background }: { background: string }) => background};
`;

const Home = () => {
  const [inputText, setInputText] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [confirmedNumber, setConfirmedNumber] = useState();
  const handleInputChange = (text: string) => {
    const newText = text.replace(/[^0-9]/g, '');
    setInputText(newText);
  };

  const handleReset = () => {
    setInputText('');
    setConfirmedNumber(null);
    setIsConfirmed(false);
    Keyboard.dismiss();
  };

  const handleConfirm = () => {
    const parseText = parseInt(inputText);

    if (isNaN(parseText) || parseText < 0 || parseText > 99) {
      Alert.alert('Invalid Number', 'Number should be between 0 and 100', [
        { text: 'Okay', onPress: handleReset },
      ]);
    }

    setConfirmedNumber(parseText);
    setIsConfirmed(true);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header title="Guess the number" />
        <Container padding={10}>
          <Text
            textAlign="center"
            fontWeight={800}
            fontSize={21}
            color="#48BB78"
            style={{ marginBottom: 10 }}
          >
            Start a new game!
          </Text>
          <Card elevation={5}>
            <Text textAlign="center" style={{ marginBottom: 20 }}>
              Select a number
            </Text>
            <TextInput
              blurOnSubmit
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="number-pad"
              maxLength={2}
              onChangeText={handleInputChange}
              value={inputText}
            />
            <StyledRowView>
              <ButtonView background="#E53E3E">
                <Button
                  title="Reset"
                  onPress={handleReset}
                  color={Platform.OS === 'ios' ? '#fff' : '#E53E3E'}
                />
              </ButtonView>
              <ButtonView background="#68D391">
                <Button
                  title="Confirm"
                  onPress={handleConfirm}
                  color={Platform.OS === 'ios' ? '#fff' : '#68D391'}
                />
              </ButtonView>
            </StyledRowView>
          </Card>
        </Container>
        {isConfirmed && confirmedNumber ? (
          <Container padding={10}>
            <Card>
              <Text>{confirmedNumber}</Text>
            </Card>
          </Container>
        ) : null}
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default Home;
