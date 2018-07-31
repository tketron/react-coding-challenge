import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/">DEMO Streaming</Link>
        <div>
          <span>Log In</span>
          <button>Start your free trial</button>
        </div>
      </nav>
    );
  }
}
