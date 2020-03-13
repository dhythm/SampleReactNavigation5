import React from 'react';
import { Text, View } from 'react-native';

const LoadingScreen: React.FunctionComponent = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Loading...</Text>
  </View>
);

export default LoadingScreen;
