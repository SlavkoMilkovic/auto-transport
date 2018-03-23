import React, { Component } from 'react';
import Info from './Info.js';
import Advantages from '../../advantages/Advantages.js';

class Home extends Component {
	render() {
		return (
			<div>
				<Info />
				<Advantages />
			</div>

		)
	}
}


export default Home;