import { NavigationContainer, useLinking } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import AuthProvider from './AuthProvider';
import HomeNavigator from './Home';
import NavigationService from './navigation-service';

const AppWithDeepLinking: React.FunctionComponent = () => {
  const ref = useRef();
  const { getInitialState } = useLinking(ref, {
    prefixes: ['srn5://'],
    config: {
      Details: 'details',
      // HomeNavigator: {
      //   screens: {
      //     Details: 'details',
      //   },
      // },
    },
  });

  const [isReady, setIsReady] = useState(false);
  const [initialState, setInitialState] = useState();

  useEffect(() => {
    Promise.race([
      getInitialState(),
      new Promise((resolve) => setTimeout(resolve, 150)),
    ])
      .catch((e) => {
        console.error(e);
      })
      .then((state) => {
        if (state !== undefined) {
          setInitialState(state);
        }

        setIsReady(true);
      });
  }, [getInitialState]);

  if (!isReady) {
    return null;
  }

  return (
    <AuthProvider>
      <NavigationContainer initialState={initialState} ref={ref}>
        <HomeNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
};

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

// export default App;
export default AppWithDeepLinking;
