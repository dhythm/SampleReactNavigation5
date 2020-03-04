import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useLayoutEffect } from 'react';
import { Text, View } from 'react-native';
import TabBar from './TabBar';

const Tab = createBottomTabNavigator();

const CustomTabNavigator = ({ navigation, route }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: route.state
        ? route.state.routes[route.state.index].name
        : route.params?.screen || 'Home',
    });
  }, [navigation, route]);

  return (
    <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

const Home = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
};

const Settings = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
};

export default CustomTabNavigator;
