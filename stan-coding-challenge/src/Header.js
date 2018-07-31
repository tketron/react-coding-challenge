import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary bg-inverse-text justify-content-between">
        <Link className="Header-Link" to="/">
          DEMO Streaming
        </Link>
        <div className="Header-buttons">
          <span>Log In</span>
          <button>Start your free trial</button>
        </div>
      </nav>
    );
  }
}
