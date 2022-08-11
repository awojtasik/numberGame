import { useState } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StartGameScreen } from './screens/StartGameScreen';
import { GameScreen } from './screens/GameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const pickNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
  };

  let screen = <StartGameScreen onPickNumber={pickNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen />;
  }

  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootScrren}>
      <ImageBackground
        source={require('./assets/imiges/kroll.jpg')}
        resizeMode="cover"
        style={styles.rootScrren}
        imageStyle={styles.backgroundImage}
      >
        {/* <StartGameScreen /> */}
        {screen}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScrren: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
