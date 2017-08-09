import React, { Component } from "react";
import agent from "superagent";
import "./product.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "",
      image: "",
      description: "",
      show: false
    };
    this.showHideDetails = this.showHideDetails.bind(this);
    this.handleAddRemoveFav = this.handleAddRemoveFav.bind(this);
  }

  handleAddRemoveFav() {
    this.props.addRemoveFav({
      id: this.props.id,
      name: this.props.name
    });
  }

  makeApiCall() {
    let api = `https://graph.facebook.com/${this.props
      .id}?fields=category,description,cover&access_token=459458757771772|864b6e907fd81f72ef3f74e9f7a9d6ae`;

    agent.get(api).end((err, res) => {
      let response = res.body || [];
      this.setState({
        category: response.category || "",
        image: (response.cover && response.cover.source) || "",
        description: response.description || ""
      });
    });
  }

  showHideDetails() {
    if (this.state.show) {
      this.setState({ show: false });
    } else {
      this.makeApiCall();
      this.setState({ show: true });
    }
  }

  render() {
    let Details = null;
    if (this.state.show) {
      Details = (
        <div>
          <h4>
            {this.state.category}{" "}
            <span className="label label-default">category</span>
          </h4>
          <blockquote>
            {this.state.description}
          </blockquote>
          <img className="img-thumbnail" src={this.state.image} />
        </div>
      );
    }

    let favClass = "glyphicon glyphicon-star-empty";
    if (this.props.isFav) {
      favClass = "glyphicon glyphicon-star";
    }

    return (
      <div className="product">
        <div className="panel panel-info">
          <div className="panel-heading">
            <h3 className="panel-title">
              <a href={`https://facebook.com/${this.props.id}`}>
                {this.props.name}
              </a>
            </h3>
          </div>
          <div className="panel-body">
            <button className="btn btn-default" onClick={this.showHideDetails}>
              Details
            </button>
            <button
              className="btn btn-default"
              onClick={this.handleAddRemoveFav}
            >
              <span className={favClass} /> Fav
            </button>
            {Details}
          </div>
        </div>
      </div>
    );
  }
}
