/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import HomeNavigator from './Home';
import { isMountedRef, navigationRef } from './navigation-service';

const App: React.FunctionComponent = () => {
  useEffect(() => {
    isMountedRef.current = true;
    return () => (isMountedRef.current = false);
  }, []);

  return (
    <NavigationContainer ref={navigationRef as any}>
      <HomeNavigator />
    </NavigationContainer>
  );
};

export default App;
