import React, { Component } from 'react';
import Streamable from './Streamable';
import './Streamables.css';

class Streamables extends Component {
  render() {
    console.log(this.props);
    const streamables = this.props.streamablesList
      .map(el => {
        return (
          <Streamable img={el.images['Poster Art'].url} title={el.title} />
        );
      })
      .slice(0, 21);
    console.log(streamables);
    return <div className="streamables">{streamables}</div>;
  }
}

export default Streamables;
