import React, { Component } from "react";
class Card extends Component {
  state = {};
  render() {
    return (
      <div className="card">
        <img
          className="card-img-top"
          src={this.props.image}
          alt="Card image cap"
        />
        <div className="card-body align-card">
          <h5 className="card-title">{this.props.name}</h5>
          <button className="btn btn-primary float-right">SEE OPENINGS</button>
        </div>
      </div>
    );
  }
}

export default Card;
