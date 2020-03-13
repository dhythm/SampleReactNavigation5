import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Button, View } from 'react-native';
import { useAuthDispatch, useAuthState } from './AuthProvider';
import LoadingScreen from './LoadingScreen';

const Stack = createStackNavigator();
const StackNavigator = () => {
  const state = useAuthState();

  if (state.status === 'Loading') {
    return <LoadingScreen />;
  }

  console.log({ state });
  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{ animationEnabled: false }}
    >
      {state.status === 'Authenticated' ? (
        <Stack.Screen name="Home" component={HomeScreen} />
      ) : (
        <Stack.Screen name="SignIn" component={SignInScreen} />
      )}
    </Stack.Navigator>
  );
};

const SignInScreen: React.FunctionComponent = () => {
  const dispatch = useAuthDispatch();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="SignIn"
        onPress={() =>
          dispatch({ type: 'COMPLETE_LOGIN', token: 'dummy-token' })
        }
      />
    </View>
  );
};

const HomeScreen: React.FunctionComponent = () => {
  const dispatch = useAuthDispatch();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="SignOut"
        onPress={() => dispatch({ type: 'COMPLETE_LOGOUT' })}
      />
    </View>
  );
};

export default StackNavigator;
