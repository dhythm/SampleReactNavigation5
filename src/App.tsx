import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import AuthProvider from './AuthProvider';
import HomeNavigator from './Home';
import NavigationService from './navigation-service';

const App: React.FunctionComponent = () => {
  useEffect(() => {
    // isMountedRef.current = true;
    // return () => (isMountedRef.current = false);
  }, []);

  return (
    // <NavigationContainer ref={navigationRef as any}>
    <AuthProvider>
      <NavigationContainer
        ref={(navigationRef) =>
          NavigationService.setTopLevelNavigator(navigationRef)
        }
      >
        <HomeNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
