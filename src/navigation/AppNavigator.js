import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import PhoneAuthTest from '../screens/SignIn';
//import AddItem from '../screens/AddItem';
//import List from '../screens/List';
//import PriceScreen from '../screens/PriceScreen';


const AppNavigator = createStackNavigator(
  {
    //PriceScreen,
    //AddItem,
    //List,
    MainTabNavigator
  },
  {
    initialRouteName: 'MainTabNavigator',
    headerMode: 'none'
  }
);


const AuthNavigator = createStackNavigator(
  {
    PhoneAuthTest
  }
)

/*
const AppContainer = createAppContainer(AppNavigator);
*/

export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  AuthNavigator,
  AppNavigator,
  AuthLoadingScreen
},
  {
    initialRouteName: 'AuthLoadingScreen',
  }
));