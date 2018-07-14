import React from 'react';
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";

export class PlayerScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      players: []
    }
  }

  press() {
    if (this.state.username) {
      let newPlayers = this.state.players.slice();
      newPlayers.push(this.state.username);
      this.setState({ username: '', players: newPlayers });
    } else {
      alert('Please enter a name');
    }
  }

  start() {
    this.props.history.push('Individual');
  }

  render() {
    return (
      <div style={styles.container}>
        <div style={{alignSelf: 'stretch', padding: 20}}>
          <input type="text" style={{textAlign: 'center', padding: 10, borderWidth: .5, borderRadius: 5, color: 'black'}}
            value={this.state.username} onChange={(e) => this.setState({username: e.target.value})}/>
        </div>
        <button style={styles.button} onClick={this.press.bind(this)}>
            Add Player
        </button>

        {/* <ListView
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
        /> */}
        <button style={styles.button} onClick={this.start.bind(this)}>
            Let's get crunk!
        </button>
      </div>
    )
  }


}

export default PlayerScreen;

const styles = {
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
};
