import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  header: {
    fontSize: 45,
  },
  textStyle: {
    fontSize: 20,
  },
  spaced: {
    padding: 20,
  },
});

const ComponentsScreen = () => {
  const myName = 'Ashwin';

  return (
    <View style={styles.spaced}>
      <Text style={styles.header}>Getting started with react native!</Text>
      <Text style={styles.textStyle}>My name is {myName}</Text>
    </View>
  );
};

export default ComponentsScreen;
