import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const box = {
  height: 80,
  width: 100,
  borderWidth: 3,
  textAlignVertical: 'center',
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 1,
    borderColor: 'black',
    height: 160,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text1Style: {
    ...box,
    borderColor: '#aa1111',
    backgroundColor: '#fa5555',
  },
  text2Style: {
    ...box,
    borderColor: '#11aa11',
    backgroundColor: '#55fa55',
    alignSelf: 'flex-end',
  },
  text3Style: {
    ...box,
    borderColor: '#1111aa',
    backgroundColor: '#5555fa',
  },
});

const BoxScreen = () => (
  <View style={styles.viewStyle}>
    <Text style={styles.text1Style}>Child #1.</Text>
    <Text style={styles.text2Style}>Child #2.</Text>
    <Text style={styles.text3Style}>Child #3.</Text>
  </View>
);

export default BoxScreen;
