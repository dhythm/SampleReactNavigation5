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
import NavigationService, { isMountedRef } from './navigation-service';

const App: React.FunctionComponent = () => {
  useEffect(() => {
    isMountedRef.current = true;
    return () => (isMountedRef.current = false);
  }, []);

  return (
    // <NavigationContainer ref={navigationRef as any}>
    <NavigationContainer
      ref={(navigationRef) =>
        NavigationService.setTopLevelNavigator(navigationRef)
      }
    >
      <HomeNavigator />
    </NavigationContainer>
  );
};

export default App;
