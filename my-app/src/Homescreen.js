import React from 'react';
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";

class Homescreen extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    alert('Warning: You must be at least 21 to play this game, please get drunk responsibly!');
  }

  render() {
    return (
      <div style={styles.container}>
        <Link  to="/players"> Back to home</Link>
        <button style={styles.button} onClick={() => this.props.history.push('/players')}>
        Tap to Add Players
        </button>
      </div>
    )
  }
}


export default Homescreen;



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
    divAlign: 'center',
    margin: 10,
  },
  instructions: {
    divAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  divBig: {
    fontSize: 36,
    divAlign: 'center',
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
    divAlign: 'center',
    fontSize: 16,
    color: 'white'
  }
};
