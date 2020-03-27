import React, { useState } from 'react';
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

const CounterScreen = () => {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.spaced}>
      <View style={styles.marBot}>
        <Text style={styles.textStyle}>Current Count</Text>
        <Text style={styles.textStyle}>{count}</Text>
      </View>
      <View style={styles.marBot}>
        <Button
          onPress={() => setCount(count + 1)}
          title="Increment"
          style={styles.marBot}
          color="#232323"
        />
      </View>
      <View style={styles.marBot}>
        <Button
          onPress={() => setCount(count - 1)}
          title="Decrement"
          style={styles.marBot}
          color="#232323"
        />
      </View>
    </View>
  );
};

export default CounterScreen;
