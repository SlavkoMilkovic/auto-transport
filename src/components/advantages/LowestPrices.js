import React, { Component } from 'react';
import './LowestPrices.css';
import MdPayment from 'react-icons/lib/md/payment';

const LowestPrices = () => {
	return (
		<div className="lowestPrices-container">
			<div className="lowestPricesLogo" style={{color: '#593910'}}>
				<MdPayment size={40} />
			</div>
			<h5>Najnize cene</h5>
			<p>Najpovoljniji uslovi za fizička i pravna lica.</p>
		</div>
	);
} 

export default LowestPrices; 