import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HTML from 'react-native-render-html';
import html from './html.js';


export default class Game extends React.Component {
  constructor(){
    console.log(html.htmlContent, html.styles);
    super();
    this.state = {
      players: [],
      minigames: [],
    }
  }

  render() {
    return (
      <View>
        <Text>This is our game</Text>
        <Wheel></Wheel>
      </View>
    );
  }
}

class Wheel extends React.Component {
  render() {
    return (
      <View>
        <Text>This is our wheel</Text>
        <HTML html={html.htmlContent} classesStyles={html.styles} />
      </View>
    );
  }
}

class MiniGame extends React.Component {
  render() {
    return (
      <View></View>
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
