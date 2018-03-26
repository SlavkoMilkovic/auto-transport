import React, { Component } from 'react';
import './GreatSelection.css';
import MdDoneAll from 'react-icons/lib/md/done-all';

const GreatSelection = () => {
	return (
		<div className="greatSelection-container">
			<div style={{color: '#593910'}}>
				<MdDoneAll size={40} />
			</div>
			<h5>Odličan izbor</h5>
			<p>Tačnost, profesionalnost, iskustvo.</p>
		</div>
	);
} 

export default GreatSelection; 