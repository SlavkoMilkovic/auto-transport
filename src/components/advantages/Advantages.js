import React, { Component } from 'react';
import './Advantages.css';
import GreatSelection from './GreatSelection.js';
import HighQuality from './HighQuality.js';
import LowestPrices from './LowestPrices.js';


class App extends Component {
  render() {
    return (
      <div className="advantages-container">

        <GreatSelection />
        <HighQuality />
        <LowestPrices />

      </div>
    );
  }
}

export default App;
