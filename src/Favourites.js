import React, { Component } from 'react';

export default class Favourites extends Component {
  render() {
    let favs = this.props.favs;
    let ids = Object.keys(favs);
    let Items = ids.map((id, index) => <li key={index}>{favs[id]}</li>);

    return(
      <div>
      {Items}
      </div>
    );
  }
}
