import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, ListView, Alert, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

class Welcome extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    alert('Warning: You must be at least 21 to play this game, please get drunk responsibly!');
  }

  press() {
    this.props.navigation.navigate('PlayerScreen');
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={[styles.button, styles.buttonPurple]} onPress={this.press.bind(this)}>
          <Text style={styles.buttonLabel}>Tap to Add Players</Text>
        </TouchableOpacity>
      </View>
    )
  }
}


export default Welcome;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6699ff',
  },
  containerFull: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  textBig: {
    fontSize: 36,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    alignSelf: 'stretch',
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 5,
    borderWidth: .5
  },
  buttonRed: {
    backgroundColor: '#FF585B',
  },
  buttonBlue: {
    backgroundColor: '#0074D9',
  },
  buttonGreen: {
    backgroundColor: '#2ECC40'
  },
  buttonPurple: {
    backgroundColor: '#a64dff'
  },
  buttonYellow: {
    backgroundColor: '#ffff1a'
  },
  buttonLabel: {
    textAlign: 'center',
    fontSize: 16,
    color: 'white'
  }
});
