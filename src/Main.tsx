import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import {
  createStackNavigator,
  HeaderBackButton,
} from '@react-navigation/stack';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={() => (
        <View style={styles.container}>
          <Text>Drawer</Text>
        </View>
      )}
    >
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
    </Drawer.Navigator>
  );
};

const StackNavigator = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator mode="modal" headerMode="screen">
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ModalScreen"
        component={ModalScreen}
        options={{
          headerBackTitle: ' ',
          headerLeft: () => (
            <HeaderBackButton
              labelVisible={false}
              backImage={() => (
                <View style={{ paddingHorizontal: 8 }}>
                  <Icon name="md-close" style={{ fontSize: 18 }} />
                </View>
              )}
              onPress={() => navigation.goBack()}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};
const ModalScreen = () => (
  <View style={styles.container}>
    <Text>Modal</Text>
  </View>
);

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tab1" component={TabScreen1} />
      <Tab.Screen name="Tab2" component={TabScreen2} />
      <Tab.Screen name="Tab3" component={TabScreen3} />
    </Tab.Navigator>
  );
};
const TabScreen1 = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Tab 1</Text>
    <Button
      title="Show Modal"
      onPress={() => navigation.navigate('ModalScreen')}
    />
  </View>
);
const TabScreen2 = () => (
  <View style={styles.container}>
    <Text>Tab 2</Text>
  </View>
);
const TabScreen3 = () => (
  <View style={styles.container}>
    <Text>Tab 3</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DrawerNavigator;
