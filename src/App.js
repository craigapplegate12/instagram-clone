import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/header';
import Info from './components/Info/info';
import Body from './components/Body/body';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Info />
        <Body />
      </div>
    );
  }
}

export default App;
