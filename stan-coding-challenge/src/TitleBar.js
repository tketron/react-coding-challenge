import React, { Component } from 'react';

export default class TitleBar extends Component {
  render() {
    const title = this.props.type
      .charAt(0)
      .toUpperCase()
      .concat(this.props.type.substring(1));
    return (
      <div>
        <h1>Popular {title}</h1>
      </div>
    );
  }
}
