import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import { Link, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div>
          <Link to="/series">
            <div> Series</div>
          </Link>
          <Link to="/movies">
            <div>Movies</div>
          </Link>
          <Switch>
            <Route path="/series" />
            <Route path="/movies" />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
