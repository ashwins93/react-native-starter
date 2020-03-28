import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const styles = StyleSheet.create({
  spaced: {
    padding: 20,
    elevation: 3,
  },
  centeredText: {
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 10,
  },
});

const ColorCounter = ({ color, setColor }) => {
  const increase = () =>
    setColor((currentColor) => Math.min(255, currentColor + 5));

  const decrease = () =>
    setColor((currentColor) => Math.max(0, currentColor - 5));

  return (
    <View style={styles.spaced}>
      <Text style={styles.centeredText}>{color}</Text>
      <Button title={`Increase ${color}`} onPress={increase} />
      <Button title={`Decrease ${color}`} onPress={decrease} />
    </View>
  );
};

export default ColorCounter;
