import React, { Component } from 'react';
import StreamableCard from './StreamableCard';
import TitleBar from './TitleBar';
import './Streamables.css';
import { getFilteredData } from './getData';

class Streamables extends Component {
  state = {
    titles: [],
    isLoading: true
  };

  componentDidMount() {
    this.setState({
      titles: getFilteredData(this.props.type),
      isLoading: false
    });
  }

  render() {
    console.log(this.props);
    const streamables = this.state.titles.map(el => {
      return (
        <StreamableCard img={el.images['Poster Art'].url} title={el.title} />
      );
    });

    if (this.state.isLoading) {
      return (
        <div>
          <TitleBar type={this.props.type} />
          <h3>Loading...</h3>
        </div>
      );
    } else {
      return (
        <div>
          <TitleBar type={this.props.type} />
          <div className="Streamables">{streamables}</div>
        </div>
      );
    }
  }
}

export default Streamables;
