import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  textInput: {
    margin: 15,
    borderColor: '#232323',
    borderWidth: 1,
    borderRadius: 4,
    fontSize: 20,
    padding: 5,
    textAlign: 'center',
  },
  textStyle: {
    fontSize: 25,
    marginVertical: 10,
    marginHorizontal: 20,
  },
});

const TextScreen = () => {
  const [text, setText] = useState('');
  return (
    <View>
      <Text style={styles.textStyle}>Enter Name:</Text>
      <TextInput
        style={styles.textInput}
        value={text}
        onChangeText={setText}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Text style={styles.textStyle}>
        {text.length < 5 && 'Name must at least be 5 characters long'}
      </Text>
    </View>
  );
};

export default TextScreen;
