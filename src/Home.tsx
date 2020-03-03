import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Alert, Button, View } from 'react-native';
import DrawerNavigator from './Drawer';
import TabNavigator from './Tab';

const Stack = createStackNavigator();

const HomeNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
  >
    <Stack.Screen
      name="Home"
      component={Home}
      options={{
        headerRight: () => (
          <Button
            onPress={() => Alert.alert('This is a button!')}
            title="Info"
            color="#fff"
          />
        ),
      }}
    />
    <Stack.Screen name="Details" component={Details} />
    <Stack.Screen name="Tab" component={TabNavigator} />
    <Stack.Screen name="Drawer" component={DrawerNavigator} />
  </Stack.Navigator>
);

const Home: React.FunctionComponent = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Button title="Go to Tab" onPress={() => navigation.navigate('Tab')} />
      <Button
        title="Go to Drawer"
        onPress={() => navigation.navigate('Drawer')}
      />
    </View>
  );
};

const Details: React.FunctionComponent = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Button title="Go to Tab" onPress={() => navigation.navigate('Tab')} />
      <Button
        title="Go to Drawer"
        onPress={() => navigation.navigate('Drawer')}
      />
    </View>
  );
};

export default HomeNavigator;
