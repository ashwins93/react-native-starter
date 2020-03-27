import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

const HomeScreen = ({ navigation }) => (
  <View>
    <Text style={styles.text}>Hello Bunny</Text>
    <Button
      title="Go to Components Demo"
      onPress={() => navigation.navigate('Component')}
    />
    <Button
      onPress={() => navigation.navigate('Lists')}
      title="Go to List Demo"
    />
  </View>
);

export default HomeScreen;
