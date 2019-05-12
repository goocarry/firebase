import React from 'react';
import { Button, View, ScrollView, StyleSheet } from 'react-native';
import { Block, Text } from '../components/index';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';

import firebase from 'react-native-firebase';

import AddItem from '../screens/AddItem';
import List from '../screens/List';
import PriceScreen from '../screens/PriceScreen';
import ProfileScreen from '../screens/ProfileScreen';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    header: null,
  };

  //go to pricelist screen
  toPrice = () => {
    this.props.navigation.navigate('PriceScreen');
  }

  signOut = () => {
    firebase.auth().signOut();
    this.props.navigation.replace('PhoneAuthTest');
  }


  renderHeader() {
    return (
      <Block column flex={1} >
        <Block>
          <Text>Автоцентр Дежнев</Text>
        </Block>
        <Block>
          <Text>chart</Text>
        </Block>
      </Block>
    )
  }


  render() {

    return (
      <Block center middle style={styles.contaner}>
        <View
          style={{
            padding: 15,
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
          }}
        >
          <Text h1 bold color="primary">Вы успешно вошли!</Text>
          <Button title="Посмотреть прайс" color="green" onPress={this.toPrice} />
        </View>
      </Block>
    );
  }
}

class SettingsScreen extends React.Component {

  static navigationOptions = {
    title:'тут навигация работает'
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Каталог услуг</Text>
        <Button
          title="Тест для добавления в БД"
          onPress={() => this.props.navigation.navigate('AddItem')}
        />
        <Button
          title="Каталог услуг"
          color="green"
          onPress={() => this.props.navigation.navigate('List')}
        />
      </View>
    );
  }
}

const HomeStack = createStackNavigator({
  HomeScreen,
  PriceScreen
})

const SettingsStack = createStackNavigator({
  SettingsScreen,
  AddItem,
  List
})

const ProfileStack = createStackNavigator({
  ProfileScreen
})

const TabNavigator = createBottomTabNavigator({
  "Каталог зап.частей": HomeStack,
  "Каталог услуг": SettingsStack,
  "Профиль": ProfileStack,
});

export default createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  contaner: {
    //backgroundColor: theme.colors.primary,
  }
})