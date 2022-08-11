import { View, Text, Pressable, StyleSheet } from 'react-native';

export const PrimaryButton = ({ children, onPress }) => {
  // const pressHandler = () => {
  //   // console.log('Presd!');
  //   onPress();
  // };
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInerContainer, styles.pressed]
            : styles.buttonInerContainer
        }
        // onPress={pressHandler}
        onPress={onPress}
        android_ripple={{ color: '#640233' }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  buttonInerContainer: {
    backgroundColor: '#72063e',
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
});
