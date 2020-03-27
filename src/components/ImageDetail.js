import React from 'react';
import { View, Text, Image } from 'react-native';

const ImageDetail = ({ title, imageSource, score }) => (
  <View>
    <Image source={imageSource} />
    <Text>{title}</Text>
    <Text>Image Score - {score}</Text>
  </View>
);

export default ImageDetail;
