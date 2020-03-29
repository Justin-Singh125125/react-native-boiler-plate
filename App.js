import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from "react-navigation-tabs";

//screens
import IndexScreen from "./src/screens/Search/index";

import SavedScreen from "./src/screens/Saved/Saved";

import FollowersScreen from "./src/screens/Followers/Followers";

import ProfileScreen from "./src/screens/Profile/Profile";


//icons
import { Feather, MaterialIcons } from "@expo/vector-icons";




//context
import { Provider as AuthProvider } from "./src/context/AuthContext";

const defaultNavigationSettings = {
  title: false,
  headerTransparent: true,
}

const tabNavigator = createBottomTabNavigator({
  SearchFlow: createStackNavigator({
    //screen section
    Search: IndexScreen,

  },
    //settings section
    {
      initialRouteName: 'Search',
      defaultNavigationOptions: defaultNavigationSettings,
      navigationOptions: {
        tabBarLabel: 'Search',
        tabBarIcon: ({ tintColor }) => (
          <Feather name="search" color={tintColor} size={25} />
        )
      }
    },

  ),
  SavedFlow: createStackNavigator({
    Saved: SavedScreen
  },
    {
      initialRouteName: 'Saved',
      defaultNavigationOptions: defaultNavigationSettings,
      navigationOptions: {
        tabBarLabel: 'Search',
        tabBarIcon: ({ tintColor }) => (
          <MaterialIcons name="favorite-border" color={tintColor} size={25} />
        )
      }
    },
  ),
  FollowersFlow: createStackNavigator({
    Followers: FollowersScreen
  },
    {
      initialRouteName: 'Followers',
      defaultNavigationOptions: defaultNavigationSettings,
      navigationOptions: {
        tabBarLabel: 'Search',
        tabBarIcon: ({ tintColor }) => (
          <Feather name="link-2" color={tintColor} size={25} />
        )
      }
    },
  ),
  ProfileFlow: createStackNavigator({
    Profile: ProfileScreen
  },
    {
      initialRouteName: 'Profile',
      defaultNavigationOptions: defaultNavigationSettings,
      navigationOptions: {
        tabBarLabel: 'Search',
        tabBarIcon: ({ tintColor }) => (
          <Feather name="user" color={tintColor} size={25} />
        )
      }
    },
  )
},
  {
    tabBarOptions: {
      showIcon: true,
      activeTintColor: '#e22222',
    }
  });


const App = createAppContainer(tabNavigator);

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};

