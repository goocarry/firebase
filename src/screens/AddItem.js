import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class AddItem extends Component {
    
    static navigationOptions = {
        title: 'Автоцентр Дежнев',
    };

    render() {
        return (
            <View>
                <Text>Add Item</Text>
            </View>
        );
    }
}