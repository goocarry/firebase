import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Каталог зап.частей</Text>
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Каталог услуг</Text>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  "Каталог зап.частей" : HomeScreen,
  "Каталог услуг": SettingsScreen,
});

export default createAppContainer(TabNavigator);