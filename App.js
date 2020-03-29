import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from "react-navigation-tabs";


//screens
import IndexScreen from "./src/screens/index";
import LoginScreen from "./src/screens/Login";
import SignupScreen from "./src/screens/Signup";

//context
import { Provider as AuthProvider } from "./src/context/AuthContext";

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Login: LoginScreen
  }),
  mainFlow: createBottomTabNavigator({
    CustomerFlow: createStackNavigator({
      Search: IndexScreen
    })
  })
});

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
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};

