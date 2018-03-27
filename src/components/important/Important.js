import React, { Component } from 'react';
import './Important.css';
import Price from './Price.js';
import Consulting from './Consulting.js';
import Install from './Install.js';

class Important extends Component {
	render() {
		return (
			<div className="important-container">
				<Price />
				<Consulting />
				<Install />
				
			</div>

		)
	}
}


export default Important;