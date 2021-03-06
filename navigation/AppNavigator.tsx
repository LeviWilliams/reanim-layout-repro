import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import ScreenOne from '../screens/ScreenOne';
import ScreenTwo from '../screens/ScreenTwo';

const RootStack = createStackNavigator();
const BottomTabs = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <BottomTabs.Navigator
      initialRouteName="TabOne"
      screenOptions={{unmountOnBlur: true}}>
      <BottomTabs.Screen name="TabOne" component={ScreenOne} />
    </BottomTabs.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <RootStack.Navigator
      screenOptions={{header: () => null, animationEnabled: false}}>
      <RootStack.Screen name="Root" component={BottomTabNavigator} />
      <RootStack.Screen name="ScreenTwo" component={ScreenTwo} />
    </RootStack.Navigator>
  );
};

export default AppNavigator;
