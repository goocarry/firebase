import React, { Component } from 'react';
import { Button, View, ScrollView, StyleSheet } from 'react-native';
import { Block, Text } from '../components/index';


import firebase from 'react-native-firebase';

export default class PriceScreen extends Component {

  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    header: null,
  };

  signOut = () => {
    firebase.auth().signOut();
    this.props.navigation.replace('PhoneAuthTest');
  }

  signOutUser = async () => {
    try {
        await firebase.auth().signOut();
        navigate('PhoneAuthTest');
    } catch (e) {
        console.log(e);
    }
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
          <Text h1 bold color="primary">Тут можно посмотреть прайс!</Text>
          <Button title="Посмотреть прайс" color="green" onPress={this.toPrice} />
          <Button title="Выйти" color="red" onPress={this.signOutUser} />
        </View>
        <Button
          title="Add an Item"
          onPress={() => this.props.navigation.navigate('AddItem')}
        />
        <Button
          title="List of Items"
          color="green"
          onPress={() => this.props.navigation.navigate('List')}
        />
      </Block>
    );
  }
}


const styles = StyleSheet.create({
  contaner: {
    //backgroundColor: theme.colors.primary,
  }
})