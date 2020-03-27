import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ImageDetail from '../components/ImageDetail';

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  spaced: {
    padding: 20,
  },
});

const ImageScreen = () => (
  <View style={styles.spaced}>
    <ImageDetail
      imageSource={require('../../assets/forest.jpg')}
      title="Forest"
      score={9}
    />
    <ImageDetail
      imageSource={require('../../assets/beach.jpg')}
      title="Beach"
      score={7}
    />
    <ImageDetail
      imageSource={require('../../assets/mountain.jpg')}
      title="Mountain"
      score={6}
    />
  </View>
);

export default ImageScreen;
