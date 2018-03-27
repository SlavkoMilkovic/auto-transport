import React, { Component } from 'react';
import './HighQuality.css';
import FaBookmark from 'react-icons/lib/fa/bookmark';

const HighQuality = () => {
	return (
		<div className="highQuality-container">
			<div className="highQualityLogo" style={{color: '#593910'}}>
				<FaBookmark size={40} />
			</div>
			<h5>Visoki kvalitet</h5>
			<p>Bezbednost i marljivost</p>
		</div>
	);
} 

export default HighQuality; 