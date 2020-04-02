import React, { Component } from 'react';
import "./style.css";

export default class Card extends Component {
  render() {
    return (
      <div className="card" id={this.props.id}>
        <div className="card-header">
          <h5 className="card-title">{this.props.title}</h5>
        </div>
        <div className="card-body">
          <p className="card-text">{this.props.body}</p>
        </div>
      </div>
    )
  }
}
