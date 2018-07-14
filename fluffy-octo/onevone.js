import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, ListView, Alert, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

export class Onevsone extends React.Component {
  static navigationOptions = {
    title: 'Onevsone',
  };

  constructor(props) {
    super(props);
    this.state = {
      players: this.props.navigation.state.params.players,
      turn: this.props.navigation.state.params.turn
    }
  }

  componentDidMount() {
    const newPlayers = this.state.players.slice().splice(turn, 1);
    this.setPlayers(newPlayers);
  }

  getPlayer() {
    const randomNumber = Math.floor(Math.random() * this.state.players.length)
    const target = this.state.players[randomNumber]
    const newPlayers = this.state.players.slice().splice(randomNumber, 1);
    this.setPlayers(newPlayers)
    return target
  }

  setPlayers(newPlayers) {
    this.setState({
      players: newPlayers
    })
  }

  goBack() {
    this.props.navigation.navigate('PlayerScreen')
  }

  country() {
    const countries = ['British', 'Southern', 'Jamaican', 'Indian', 'Mexican', 'Chinese', 'Italian', 'German', 'Boston', 'Pirate']
    return countries[Math.floor(Math.random() * 10)]
  }

  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.goBack.bind(this)}>
        {/* call a loved one 1v1 */}
        <Text>
        You must let {this.getPlayer} call the top number of a friend/family member in your Recents!
          <TouchableOpacity onPress={this.getPlayer}>

          </TouchableOpacity>
        </Text>
        {/* can't say a specific word 1v1*/}
        <Text>
          Whoever you pick isn't allowed to speak for one round.
        </Text>
        {/* drink challenge 1v1 */}
        <Text>
          Pick a random player and drink as much as you want, they must drink the same amount.
        </Text>
        {/* thumb war */}
        <Text>
          War of the thumbs! You and {this.getPlayer} will have a thumb war.
        </Text>
        {/* staring contest */}
        <Text>
          Get in a staring contest with {this.getPlayer}.
        </Text>
        {/* NINJA! group*/}
        <Text>
          NINJA! EVERYONE BUST OUT INTO NINJA NOW!!! Winner gives out three sips! If you don't want to play you must drink!
        </Text>
        {/* Slaps */}
        <Text>
          Play slaps with {this.getPlayer}, best two out of three.
        </Text>
        {/* wager */}
        <Text>
          {this.getPlayer} and {this.getPlayer} need to take their shirts off. People vote on who drink.
        </Text>
      </TouchableOpacity>
    )
  }


}

export default Individual;

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
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 5,
    borderWidth: .5,
    marginBottom: 50
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
  },
  namePlate: {
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5,
    flexGrow: 1
  }
});
