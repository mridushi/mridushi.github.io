import React, { Component } from 'react';
import agent from 'superagent';
import Product from './Product.js';
import logo from './logo.svg';
import './App.css';

// https://graph.facebook.com/search?q=stuff&type=page&access_token=459458757771772|864b6e907fd81f72ef3f74e9f7a9d6ae
// https://graph.facebook.com/21253884267?fields=category,description,cover&access_token=459458757771772|864b6e907fd81f72ef3f74e9f7a9d6ae


class App extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      data: []
    }
  }

  handleChange(e){
    let query = e.target.value;
    let api = `https://graph.facebook.com/search?q=${query}&type=page&access_token=459458757771772|864b6e907fd81f72ef3f74e9f7a9d6ae`;

    agent
      .get(api)
      .end((err, res) => {
        let response = res.body.data || [];
        this.setState({
          data: response
        })
      });

  }

  render() {
    let Results = this.state.data
                  .map((page, index) => (
                    <li key={index}>
                      <Product key={index} name={page.name} id={page.id} />
                    </li>
                  ));

    return (
      <div className="App">
        <label>
          Search:
          <input type="text" name="name" placeholder="Search for a Page" onChange={this.handleChange}/>
        </label>
        <ul>{Results}</ul>
      </div>
    );
  }
}

export default App;
