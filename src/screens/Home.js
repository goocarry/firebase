import React, { Component } from 'react';
import { Button, View, Text, ScrollView, Image } from 'react-native';


export default class Home extends Component {

  static navigationOptions = {
    title: 'Автоцентр Дежнев',
  };

  /*
  constructor(props) {
    super(props);

    this.state = {
      user: null,
    };
  }
  */
  //из за этой хуйни еллоу бокс вылазит user не хочет рендерить
  /*
  componentDidMount() {
    this.setState({ user: this.props.navigation.state.params.user });
  }

  */

  //go to pricelist screen
  toPrice = () => {
    this.props.navigation.navigate('MainTabNavigator');
  }

  

  render() {

    return (
      <ScrollView>
        <View
          style={{
            padding: 15,
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
          }}
        >
          <Image source={{ uri: successImageUri }} style={{ width: 300, height: 100, marginBottom: 25 }} />
          <Text style={{ fontSize: 25 }}>Вы успешно вошли!ХЪУЙ</Text>
          <Button title="Посмотреть прайс" color="green" onPress={this.toPrice} />
          <Button title="Выйти" color="red" onPress={this.signOut} />
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
      </ScrollView>
    );
  }
}