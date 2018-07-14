import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import HTML from 'react-native-render-html';
import html from './html.js';


export default class Game extends React.Component {
  constructor(){
    super();
    this.state = {
      players: [],
      minigames: [],
    }
  }

  render() {
    return (
      <View>
        <Wheel></Wheel>
      </View>
    );
  }
}

class Wheel extends React.Component {
  render() {

    return (
    <HTML html={html.htmlContent} imagesMaxWidth={Dimensions.get('window').width}
      classesStyles={html.classesStyles}
    tagsStyles={html.tagsStyles}/>
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
