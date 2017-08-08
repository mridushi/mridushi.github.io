import React, { Component } from "react";
import "./favourites.css"

export default class Favourites extends Component {
  render() {
    let favs = this.props.favs;
    let ids = Object.keys(favs);
    let Items = ids.map((id, index) =>
      <li className="list-group-item list-group-item" key={index}>
        <h5>
          <a href={`https://facebook.com/${id}`}>
            {favs[id]}
          </a>
        </h5>
      </li>
    );

    return (
      <div>
        <ul className="list-group">
          {Items}
        </ul>
      </div>
    );
  }
}
