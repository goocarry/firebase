import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import PhoneAuthTest from '../screens/SignIn';
import AddItem from '../screens/AddItem';  
import List from '../screens/List';
import Home from '../screens/Home';


const AppNavigator = createStackNavigator(  
    {
      PhoneAuthTest,
      Home,
      AddItem,
      List,
      MainTabNavigator
    },
    {
      initialRouteName: 'PhoneAuthTest'
    }
  );

/*
const AppContainer = createAppContainer(AppNavigator);
*/

export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
      AuthLoadingScreen,
      AppNavigator
},
{
  initialRouteName: 'AuthLoadingScreen',
}
));