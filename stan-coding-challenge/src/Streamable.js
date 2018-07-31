import React, { Component } from 'react';
import './Streamable.css';

class Streamable extends Component {
  render() {
    return (
      <div className="streamable">
        <img src={this.props.img} alt="image" />
        <p>{this.props.title}</p>
      </div>
    );
  }
}

export default Streamable;
