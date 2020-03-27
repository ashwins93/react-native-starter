import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

const ListScreen = () => {
  const friends = [
    { name: 'Friend #1', age: 20 },
    { name: 'Friend #2', age: 32 },
    { name: 'Friend #3', age: 25 },
    { name: 'Friend #4', age: 42 },
    { name: 'Friend #5', age: 55 },
    { name: 'Friend #6', age: 18 },
    { name: 'Friend #7', age: 43 },
    { name: 'Friend #8', age: 27 },
    { name: 'Friend #9', age: 26 },
  ];
  return (
    <FlatList
      data={friends}
      renderItem={({ item: friend }) => (
        <Text style={styles.textStyle}>
          {friend.name} - Age {friend.age}
        </Text>
      )}
      keyExtractor={(friend) => friend.name}
    />
  );
};

export default ListScreen;
