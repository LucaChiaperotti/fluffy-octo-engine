import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, ListView, Alert, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

export class Individual extends React.Component {
  static navigationOptions = {
    title: 'Individual',
  };

  constructor(props) {
    super(props);
    this.state = {
      players: this.props.navigation.state.params.players,
      target: '',
      player1: 'someone',
      player2: 'someone else',
      disabled: false
    }
  }

  getPlayer() {
    const randomNumber1 = Math.floor(Math.random() * this.state.players.length);
    const player1 = this.state.players[randomNumber1]
    let newPlayers = this.state.players.slice();
    newPlayers.splice(randomNumber1, 1);
    console.log(newPlayers);
    const randomNumber2 = Math.floor(Math.random() * newPlayers.length);
    const player2 = newPlayers[randomNumber2];
    newPlayers.splice(randomNumber2, 1);
    this.setState({
      players: newPlayers,
      player1: player1,
      player2: player2,
      disabled: true
    })
  }

  goBack() {
    this.props.navigation.navigate('PlayerScreen');
  }

  country() {
    const countries = ['British', 'Southern', 'Jamaican', 'Indian', 'Mexican', 'Chinese', 'Italian', 'German', 'Boston', 'Pirate']
    return countries[Math.floor(Math.random() * 10)]
  }

  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.goBack.bind(this)}>
        {/* accents */}
        <Text>
          You must speak with a {this.country()} accent for the next 2 rounds!
        </Text>
        {/* call a loved one 1v1 */}
        <Text>
        You must let {this.state.player1} call the top number of a friend/family member in your Recents!
        </Text>
        <TouchableOpacity style={[styles.button, styles.buttonPurple]} onPress={this.getPlayer.bind(this)} disabled={this.state.disabled}>
          <Text style={styles.buttonLabel}>Choose player</Text>
        </TouchableOpacity>
        {/* make people drink group */}
        <Text>
          Make either {this.state.player1} or {this.state.player2} finish their drinks.
        </Text>
        {/* STINGPONG */}
        <Text>
          Stingpong! Take your shirt off and let everyone through a ping pong ball at you once.
        </Text>
        {/* question master! */}
        <Text>
          You are the question master! Anyone who answers your questions needs to drink.
        </Text>
        {/* can't say a specific word 1v1*/}
        <Text>
          Whoever you pick isn't allowed to speak for one round.
        </Text>
        {/* pairs group */}
        <Text>
          Pick someone for your pair, they must drink whenever you drink for one round.
        </Text>
        {/* truth or dare */}
        <Text>
          Truth or dare! Drink if you don't want to answer the question or do the dare the group gives you.
        </Text>
        {/* blindfold */}
        <Text>
          Blind! Keep your eyes shut for one round!
        </Text>
        {/* drink challenge 1v1 */}
        <Text>
          Pick a random player and drink as much as you want, they must drink the same amount.
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
