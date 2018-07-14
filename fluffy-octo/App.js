import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, ListView, Alert, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Welcome from './Homescreen';
import PlayerScreen from './Playerscreen';
import Individual from './Individual';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

export default StackNavigator({
  Welcome: {
    screen: Welcome,
  },
  PlayerScreen: {
    screen: PlayerScreen
  },
  Individual: {
    screen: Individual
  }

}, {initialRouteName: 'Welcome'});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
