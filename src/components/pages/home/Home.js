import React, { Component } from 'react';
import './Home.css';
import Info from './Info.js';
import Advantages from '../../advantages/Advantages.js';

class Home extends Component {
	render() {
		return (
			<div className="home-container">
				<Info />
				<Advantages />
				<hr className="fakeNavbar" />
			</div>

		)
	}
}


export default Home;