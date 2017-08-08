import React, { Component } from 'react';
import agent from 'superagent';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      image: '',
      description: ''
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleFav = this.handleFav.bind(this);
  }

  handleFav() {
    this.props.addRemoveFav({
      id: this.props.id,
      name: this.props.name
    });
  }

  handleClick() {
    let api = `https://graph.facebook.com/${this.props.id}?fields=category,description,cover&access_token=459458757771772|864b6e907fd81f72ef3f74e9f7a9d6ae`;

    agent
      .get(api)
      .end((err, res) => {
        let response = res.body || [];

        this.setState({
          category: response.category || '',
          image: response.cover.source || '',
          description: response.description || ''
        });
      });
  }
  render() {
    return(
      <div>
        <p>{this.props.name}</p><p>{this.props.id}</p>
        <button className="btn btn-primary" onClick={this.handleClick}>Details</button>
        <button className="btn btn-default" onClick={this.handleFav}>Fav</button>
        <p>{this.state.category}</p>
        <p>{this.state.description}</p>
        <img className="img-thumbnail" src={this.state.image}/>
      </div>
    );
  }
}
