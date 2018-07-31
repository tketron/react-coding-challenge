import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import StreamableCard from './StreamableCard';
import TitleBar from './TitleBar';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div>
        <TitleBar type={'titles'} />
        <div className="Home-links">
          <Link to="/series">
            <StreamableCard
              img={'http://placeimg.com/225/150/tech/grayscale'}
              title={'Popular Series'}
            />
          </Link>
          <Link to="/movies">
            <StreamableCard
              img={'http://placeimg.com/225/150/tech/grayscale'}
              title={'Popular Movies'}
            />
          </Link>
        </div>
      </div>
    );
  }
}
