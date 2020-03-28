import React, { useReducer } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  spaced: {
    padding: 20,
  },
  marBot: {
    marginBottom: 20,
  },
  textStyle: {
    fontSize: 25,
    textAlign: 'center',
  },
});
const reducer = (state, action) => {
  switch (action.type) {
    case 'INC':
      return state + 1;
    case 'DEC':
      return state - 1;
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <View style={styles.spaced}>
      <View style={styles.marBot}>
        <Text style={styles.textStyle}>Current Count</Text>
        <Text style={styles.textStyle}>{count}</Text>
      </View>
      <View style={styles.marBot}>
        <Button
          onPress={() => dispatch({ type: 'INC' })}
          title="Increment"
          style={styles.marBot}
          color="#232323"
        />
      </View>
      <View style={styles.marBot}>
        <Button
          onPress={() => dispatch({ type: 'DEC' })}
          title="Decrement"
          style={styles.marBot}
          color="#232323"
        />
      </View>
    </View>
  );
};

export default CounterScreen;
