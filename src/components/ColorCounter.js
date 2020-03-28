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

const ColorCounter = ({ color, increase, decrease }) => (
  <View style={styles.spaced}>
    <Text style={styles.centeredText}>{color}</Text>
    <Button title={`Increase ${color}`} onPress={increase} />
    <Button title={`Decrease ${color}`} onPress={decrease} />
  </View>
);

export default ColorCounter;
