import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, ListView, Alert, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

export class PlayerScreen extends React.Component {
  static navigationOptions = {
    title: 'PlayerScreen',
  };

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      username: '',
      players: [],
      dataSource: ds.cloneWithRows([])
    }
  }

  press() {
    if (this.state.username) {
      let newPlayers = this.state.players.slice();
      newPlayers.push(this.state.username);
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.setState({ username: '', players: newPlayers, dataSource: ds.cloneWithRows(newPlayers) });
    } else {
      alert('Please enter a name');
    }
  }

  start() {
    this.props.navigation.navigate('Individual', { players: this.state.players });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{alignSelf: 'stretch', padding: 20}}>
          <TextInput type="text" style={{textAlign: 'center', padding: 10, borderWidth: .5, borderRadius: 5, color: 'white'}} placeholder="Enter Player Name"
            value={this.state.username} onChangeText={(text) => this.setState({username: text})}/>
        </View>
        <TouchableOpacity style={[styles.button, styles.buttonPurple]} onPress={this.press.bind(this)}>
            <Text style={styles.buttonLabel}>Add Player</Text>
        </TouchableOpacity>

        <ListView
          contentContainerStyle={{ flexDirection: 'column', flexWrap: 'wrap'}}
          enableEmptySections={true}
          dataSource={this.state.dataSource}
          renderRow={(rowData) =>
            <View style={styles.namePlate}>
              <Text style={{
                textAlign: 'center',
                fontSize: 15,
                color: 'white'
              }}>{rowData}</Text>
            </View>
          }
        />
        <TouchableOpacity style={[styles.button, styles.buttonPurple]} onPress={this.start.bind(this)}>
            <Text style={styles.buttonLabel}>Let's get crunk!</Text>
        </TouchableOpacity>
      </View>
    )
  }


}

export default PlayerScreen;

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
