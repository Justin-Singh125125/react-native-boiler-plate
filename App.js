import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


//screens
import IndexScreen from "./src/screens/index";

const navigator = createStackNavigator(
  {
    Index: IndexScreen
  },
  {

    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: false,
      headerTransparent: true
    },
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <App />
  );
};

