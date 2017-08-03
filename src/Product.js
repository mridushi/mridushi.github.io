import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return(
      <div>
        <p>{this.props.name}</p><p>{this.props.id}</p>
      </div>
    );
  }
}
