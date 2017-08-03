import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';




// https://graph.facebook.com/search?q=stuff&type=page&access_token=459458757771772|864b6e907fd81f72ef3f74e9f7a9d6ae
// https://graph.facebook.com/21253884267?fields=category,description,cover&access_token=459458757771772|864b6e907fd81f72ef3f74e9f7a9d6ae


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
