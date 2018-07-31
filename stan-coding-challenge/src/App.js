import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import Streamables from './Streamables';
import data from './sample.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              path="/series"
              component={props => <Streamables {...props} type={'series'} />}
            />
            <Route
              path="/movies"
              component={props => <Streamables {...props} type={'movie'} />}
            />
            <Redirect to="/" />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
