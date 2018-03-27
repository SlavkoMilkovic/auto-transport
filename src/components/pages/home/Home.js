import React, { Component } from 'react';
import './Home.css';
import Info from './Info.js';
import Advantages from '../../advantages/Advantages.js';
import Commercials from '../../commercials/Commercials.js';
import Important from '../../important/Important.js'

class Home extends Component {
	render() {
		return (
			<div className="home-container">
				<Info />
				<Advantages />
				<hr className="fakeNavbar" />
				<Commercials />
				<hr className="fakeNavbarbottom" />
				<Important />
			</div>

		)
	}
}


export default Home;