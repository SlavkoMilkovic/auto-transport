import React, { Component } from 'react';
import './LowestPrices.css';
import MdPayment from 'react-icons/lib/md/payment';

const LowestPrices = () => {
	return (
		<div className="lowestPrices-container">
			<div style={{color: '#df4d2e'}}>
				<MdPayment size={40} />
			</div>
			<h5>Najnize cene</h5>
			<p>Nasa kompanija nudi najnize cene</p>
		</div>
	);
} 

export default LowestPrices; 