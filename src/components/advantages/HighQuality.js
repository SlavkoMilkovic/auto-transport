import React, { Component } from 'react';
import './HighQuality.css';
import FaBookmark from 'react-icons/lib/fa/bookmark';

const HighQuality = () => {
	return (
		<div className="highQuality-container">
			<div style={{color: '#242424'}}>
				<FaBookmark size={40} />
			</div>
			<h5>Visoki kvalitet</h5>
			<p>Nasa kompanija nudi visoki kvalitet</p>
		</div>
	);
} 

export default HighQuality; 