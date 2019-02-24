import React, { Component } from 'react';
import './App.css';
import Country from './containers/Country/Country.js'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Country/>
      </div>
    );
  }
}

export default App;
