import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet"/>
        <div id="wrapper">
          <div id="wheel">
            <div id="inner-wheel">
              <div class="sec"><span class="fa fa-bell-o"></span></div>
              <div class="sec"><span class="fa fa-comment-o"></span></div>
              <div class="sec"><span class="fa fa-smile-o"></span></div>
              <div class="sec"><span class="fa fa-heart-o"></span></div>
              <div class="sec"><span class="fa fa-star-o"></span></div>
              <div class="sec"><span class="fa fa-lightbulb-o"></span></div>
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

export default App;
