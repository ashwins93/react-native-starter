import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

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
    <Button
      onPress={() => navigation.navigate('Image')}
      title="Go to Image Demo"
    />
    <Button
      onPress={() => navigation.navigate('Counter')}
      title="Go to Counter Demo"
    />
    <Button
      onPress={() => navigation.navigate('Color')}
      title="Go to Color Demo"
    />
    <Button
      onPress={() => navigation.navigate('Square')}
      title="Go to Sqaure Demo"
    />
    <Button
      onPress={() => navigation.navigate('Text')}
      title="Go to Text Demo"
    />
  </View>
);

export default HomeScreen;
