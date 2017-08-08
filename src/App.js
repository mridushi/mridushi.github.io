import React, { Component } from "react";
import agent from "superagent";
import Product from "./Product.js";
import Favourites from "./Favourites.js";
import logo from "./logo.svg";
import "./App.css";

// https://graph.facebook.com/search?q=stuff&type=page&access_token=459458757771772|864b6e907fd81f72ef3f74e9f7a9d6ae
// https://graph.facebook.com/21253884267?fields=category,description,cover&access_token=459458757771772|864b6e907fd81f72ef3f74e9f7a9d6ae

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.addRemoveFav = this.addRemoveFav.bind(this);

    let favsFromStorage = JSON.parse(localStorage.getItem("favs")) || {};

    this.state = {
      data: [],
      favs: favsFromStorage
    };
  }

  addRemoveFav(product) {
    let currentFavs = { ...this.state.favs };
    let key = product.id;
    let value = product.name;

    if (key in currentFavs) {
      delete currentFavs[key];
    } else {
      currentFavs[key] = value;
    }

    localStorage.setItem("favs", JSON.stringify(currentFavs));

    this.setState({
      favs: currentFavs
    });
  }

  handleChange(e) {
    let query = e.target.value;
    let api = `https://graph.facebook.com/search?q=${query}&type=page&access_token=459458757771772|864b6e907fd81f72ef3f74e9f7a9d6ae`;

    agent.get(api).end((err, res) => {
      let response = res.body.data || [];
      this.setState({
        data: response
      });
    });
  }

  render() {
    let Results = this.state.data.map((page, index) => {

      let isFav = false;
      if (page.id in this.state.favs) {
        isFav = true;
      }

      return (
        <li key={index}>
          <Product
            isFav={isFav}
            key={page.id}
            name={page.name}
            id={page.id}
            addRemoveFav={this.addRemoveFav}
          />
        </li>
      );

    })

    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 search-header">
              <label>
                <input
                  className="form-control search-input"
                  type="text"
                  name="name"
                  placeholder="Search for a Facebook Page"
                  onChange={this.handleChange}
                />
              </label>
            </div>
          </div>
          <div className="row results">
            <div className="col-md-8">
              <ul>
                {Results}
              </ul>
            </div>
            <div className="col-md-4">
              <Favourites favs={this.state.favs} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
