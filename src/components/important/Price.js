import React, { Component } from 'react';
import './Price.css';
import MdEuroSymbol from 'react-icons/lib/md/euro-symbol';


const Price = () => {
	return (
		<div className="price-container">
				<div style={{color: '#593910'}}>
				<MdEuroSymbol size={40} />
				<h3>Cene selidbe</h3>
				<p>Cena selidbe zavisi od nekoliko faktora. Najsigurniji nacin da saznate vase troskove je da nas pozovete
					 a mi cemo vam dati besplatnu procenu.
				</p>
			</div>
			
		</div>
	);
} 

export default Price; 