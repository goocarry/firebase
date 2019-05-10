import React, { Component } from 'react';
import { View, Button, TextInput, Image, ScrollView, StyleSheet } from 'react-native';
import { Block, Text } from '../components/index';
import * as theme from '../theme';
//import * as Font from 'expo-font';

import firebase from 'react-native-firebase';

const successImageUri = 'https://lh3.googleusercontent.com/SW19uhr3T27H-TP9i-BtTua68FGEVTcQ7XNDLKHQJVmC2Ex6HfLRPB79bLhQbbYitzesoQ=s170';

export default class PhoneAuthTest extends Component {
  constructor(props) {
    super(props);
    this.unsubscribe = null;
    this.state = {
      //font
      //fontsLoaded: false,
      //firebase phone auth
      user: null,
      message: '',
      codeInput: '',
      phoneNumber: '+7',
      confirmResult: null,
    };
  }

  //TODO troubles with expo-asset 
  loadFonts() {
    return Font.loadAsync({
      "Montserrat-Regular": require("../assets/fonts/Montserrat-Regular.ttf"),
      "Montserrat-Bold": require("../assets/fonts/Montserrat-Bold.ttf"),
      "Montserrat-SemiBold": require("../assets/fonts/Montserrat-SemiBold.ttf"),
      "Montserrat-Medium": require("../assets/fonts/Montserrat-Medium.ttf"),
      "Montserrat-Light": require("../assets/fonts/Montserrat-Light.ttf"),
    });
  }

  static navigationOptions = {
    title: 'Автоцентр Дежнев',
  };


  componentDidMount() {
    /*
    //load fonts
    await this.loadFonts();
    this.setState({ fontsLoaded: true});
    */

    //firebase auth
    //TODO should use asyncStorage for userToken
    this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.navigation.replace('MainTabNavigator');
      } else {
        // User has been signed out, reset the state
        this.setState({
          user: null,
          message: '',
          codeInput: '',
          phoneNumber: '+7',
          confirmResult: null,
        });
      }
    });
  }

  
  componentWillUnmount() {
    if (this.unsubscribe) this.unsubscribe();
  }
  

  signIn = () => {
    const { phoneNumber } = this.state;
    this.setState({ message: 'Высылаем код ...' });

    firebase.auth().signInWithPhoneNumber(phoneNumber)
      .then(confirmResult => this.setState({ confirmResult, message: 'Код успешно отправлен!' }))
      .catch(error => this.setState({ message: `Возникла проблема: ${error.message}` }));
  };

  confirmCode = () => {
    const { codeInput, confirmResult } = this.state;

    if (confirmResult && codeInput.length) {
      confirmResult.confirm(codeInput)
        .then((user) => {
          this.setState({ message: 'Код подтвержден!' });
          //this.props.navigation.navigate('MainTabNavigator');
        })
        .catch(error => this.setState({ message: `Ошибка подтверждения кода: ${error.message}` }));
    }
  };

  /*
    signOut = () => {
      firebase.auth().signOut();
    }
  
    //go to pricelist screen
    toPrice = () => {
      this.props.navigation.navigate('MainTabNavigator');
    }
  */

  toHome = () => {
    this.props.navigation.replace('Home')
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


  renderPhoneNumberInput() {
    const { phoneNumber } = this.state;

    return (
      <View style={{ padding: 25 }}>
        <Image source={{ uri: successImageUri }} style={{ width: 300, height: 100, marginBottom: 25 }} />
        <Text>Введите номер телефона:</Text>
        <TextInput
          autoFocus
          style={{ height: 40, marginTop: 15, marginBottom: 15 }}
          onChangeText={value => this.setState({ phoneNumber: value })}
          placeholder={'Номер телефона ... '}
          value={phoneNumber}
        />
        <Button title="Войти" color="green" onPress={this.signIn} />
      </View>
    );
  }

  renderMessage() {
    const { message } = this.state;

    if (!message.length) return null;

    return (
      <Text style={{ padding: 5, backgroundColor: '#000', color: '#fff' }}>{message}</Text>
    );
  }

  renderVerificationCodeInput() {
    const { codeInput } = this.state;

    return (
      <View style={{ marginTop: 25, padding: 25 }}>
        <Text>Введите код авторизации:</Text>
        <TextInput
          autoFocus
          style={{ height: 40, marginTop: 15, marginBottom: 15 }}
          onChangeText={value => this.setState({ codeInput: value })}
          placeholder={'Code ... '}
          value={codeInput}
        />
        <Button title="Подтвердить" color="#841584" onPress={this.confirmCode} />
      </View>
    );
  }

  render() {
    const { user, confirmResult } = this.state;
    return (
      <View style={{ flex: 1 }}>

        {!user && !confirmResult && this.renderPhoneNumberInput()}

        {this.renderMessage()}

        {!user && confirmResult && this.renderVerificationCodeInput()}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  contaner: {
    //backgroundColor: theme.colors.primary,
  }
})