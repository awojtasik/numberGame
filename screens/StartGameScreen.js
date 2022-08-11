import { useState } from 'react';
import { View, TextInput, StyleSheet, Alert } from 'react-native';
import { PrimaryButton } from '../components/PrimaryButton';

export const StartGameScreen = ({ onPickNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState('');

  const numberInputHandler = (enternedText) => {
    setEnteredNumber(enternedText);
  };

  const resetinputHandler = () => {
    setEnteredNumber('');
  };

  const confirmInputHandler = () => {
    const choseNumber = parseInt(enteredNumber);

    if (isNaN(choseNumber) || choseNumber <= 0 || choseNumber > 99) {
      Alert.alert(
        'Invalid number',
        'Number has to be a number between 1 and 99.',
        [{ text: 'Okey!', style: 'destructive', onPress: resetinputHandler }]
      );
      // show alert!
      return;
    }
    // console.log('Valid number!');
    onPickNumber(choseNumber);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={numberInputHandler}
        value={enteredNumber}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetinputHandler}>RESET</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>CONFIRM</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: '#4e0329',
    borderRadius: 8,
    elevation: 4, // is android only property
    shadowColor: 'black', // is only ios property
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  textInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
});
