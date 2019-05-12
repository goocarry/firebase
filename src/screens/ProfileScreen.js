import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

import firebase from 'react-native-firebase';

export default class ProfileScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
          user: null
        };
      }
    

    static navigationOptions = {
        title: 'тут тоже'
    };

    componentDidMount() {
        let currentUser = firebase.auth().currentUser;
        //console.log(this.user);

        if(currentUser) {
            this.setState({
                user: currentUser.toJSON()
            });
        }
    }

    signOutUser = async () => {
        try {
            await firebase.auth().signOut();
            this.props.navigation.navigate('PhoneAuthTest');
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        const { user } = this.state;
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Пользователь:{JSON.stringify(user)}</Text>
                <Text>Профиль</Text>
                <Button title="Выйти" color="red" onPress={this.signOutUser} />
            </View>
        );
    }
}
