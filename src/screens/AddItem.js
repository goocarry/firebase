import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableHighlight, Alert } from 'react-native';

import firebase from 'react-native-firebase';


let addItem = item => {
    firebase.database().ref('/items').push({
        name: item
    });
};

export default class AddItem extends Component {

    static navigationOptions = {
        title: 'Автоцентр Дежнев',
    };

    state = {
        name: ''
    };

    handleChange = e => {
        this.setState({
            name: e.nativeEvent.text
        });
    };
    handleSubmit = () => {
        addItem(this.state.name);
        Alert.alert('Штука сохранена успешно');
    };

    render() {
        return (
            <View style={styles.main}>
                <Text style={styles.title}>Добавть штуку в БД</Text>
                <TextInput style={styles.itemInput} onChange={this.handleChange} />
                <TouchableHighlight
                    style={styles.button}
                    underlayColor="white"
                    onPress={this.handleSubmit}
                >
                    <Text style={styles.buttonText}>Добавить</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({  
    main: {
      flex: 1,
      padding: 30,
      flexDirection: 'column',
      justifyContent: 'center'
    },
    title: {
      marginBottom: 20,
      fontSize: 25,
      textAlign: 'center'
    },
    itemInput: {
      height: 50,
      padding: 4,
      marginRight: 5,
      fontSize: 23,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 8,
      color: 'gray'
    },
    buttonText: {
      fontSize: 18,
      color: '#111',
      alignSelf: 'center'
    },
    button: {
      height: 45,
      flexDirection: 'row',
      backgroundColor: 'green',
      borderColor: 'white',
      borderWidth: 1,
      borderRadius: 8,
      marginBottom: 10,
      marginTop: 10,
      alignSelf: 'stretch',
      justifyContent: 'center'
    }
  });