import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const styles = StyleSheet.create({});

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  return (
    <View>
      <ColorCounter color="Red" setColor={setRed} />
      <ColorCounter color="Green" setColor={setGreen} />
      <ColorCounter color="Blue" setColor={setBlue} />
      <View
        style={{
          height: 200,
          marginVertical: 10,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  );
};

export default SquareScreen;
