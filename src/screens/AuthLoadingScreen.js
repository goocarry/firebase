import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
  Text
} from 'react-native';
import firebase from 'react-native-firebase';

export default class AuthLoadingScreen extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.navigation.navigate('MainTabNavigator');
      } else {
        this.props.navigation.navigate('PhoneAuthTest');
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
        <Text>Загрузка...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});


