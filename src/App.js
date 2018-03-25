import React, { Component } from 'react';
import './App.css';
import Navigator from './components/navigator/Navigator.js';
import Footer from './components/footer/Footer.js';

class App extends Component {
  render() {
    return (
      <div className="app">

        <Navigator />
        <Footer />

      </div>
    );
  }
}

export default App;
