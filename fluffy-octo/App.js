import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Game from './Game.js'

export default class App extends React.Component {
  render() {
    return (
      <View>
      <Game></Game>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
