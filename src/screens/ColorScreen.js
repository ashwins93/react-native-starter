import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const styles = StyleSheet.create({});

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

const ColorScreen = () => {
  const [boxes, setBoxes] = useState([
    {
      bgcolor: randomRgb(),
    },
  ]);
  return (
    <View>
      <Button
        title="Add Color"
        onPress={() =>
          setBoxes((state) => [...state, { bgcolor: randomRgb() }])
        }
      />
      <FlatList
        data={boxes}
        keyExtractor={(box) => box.bgcolor}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: item.bgcolor,
              height: 100,
              width: '100%',
            }}
          />
        )}
      />
    </View>
  );
};

export default ColorScreen;
