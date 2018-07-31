import React, { Component } from 'react';
import './StreamableCard.css';

class StreamableCard extends Component {
  render() {
    if (this.props.img) {
      const background = <img src={this.props.img} alt="image" />;
    } else {
      const background = <div className="" />;
    }
    return (
      <div className="Streamable-Card">
        <div className="Streamable-Card-image">
          <img src={this.props.img} alt="image" />
        </div>
        <p>{this.props.title}</p>
      </div>
    );
  }
}

export default StreamableCard;
