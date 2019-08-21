import React, { useState } from 'react';

import Header from '../../components/Header';
import Container from '../../components/Container';
import Text from '../../components/Text';
import Card from '../../components/Card';
import TextInput from '../../components/TextInput';

const Home = () => {
  const [inputText, setInputText] = useState('');
  const handleInputChange = (text: string) => {
    const newText = text.replace(/[^0-9]/g, '');
    console.log('newText', newText);
    setInputText(newText);
  };
  return (
    <React.Fragment>
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
        </Card>
      </Container>
    </React.Fragment>
  );
};

export default Home;
