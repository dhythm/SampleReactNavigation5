/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import HomeNavigator from './Home';

const App: React.FunctionComponent = () => {
  return (
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer>
  );
};

export default App;
