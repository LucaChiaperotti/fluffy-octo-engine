import React, { Component } from 'react';
import './App.css';


class Game extends Component {
  render() {
    return (
      <Wheel></Wheel>
    );
  }
}

class Wheel extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">This is our Drinking Game</h1>
        </header>

        <div id="wrapper">
          <div id="wheel">
            <div id="inner-wheel">
              <div className="sec"></div>
              <div className="sec"></div>
              <div className="sec"></div>
              <div className="sec"></div>
              <div className="sec"></div>
              <div className="sec"></div>
            </div>
            <div id="spin">
              <div id="inner-spin"></div>
            </div>
            <div id="shine"></div>
          </div>
          <div id="txt"></div>
        </div>
      </div>
    );
  }
}

export default Game;