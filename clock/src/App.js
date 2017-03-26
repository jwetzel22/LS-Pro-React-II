import React, { Component } from 'react';
import './App.css';
import Clock from './Clock';
import NavBar from './NavBar';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Clock />
      </div>
    );
  }
}

export default App;
