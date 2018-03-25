import React, { Component } from 'react';
import './Commercials.css';
import truck from '../../assets/images/truck.jpg';
import Working from './Working.js';


class Commercials extends Component {
	render() {
		return (
			<div className="commercials-container">
				<img className="commercialImage-container" src={truck} alt="truck" />
				<Working />
			</div>

		)
	}
}


export default Commercials;