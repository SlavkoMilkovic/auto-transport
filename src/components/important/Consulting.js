import React, { Component } from 'react';
import './Consulting.css';
import MdHome from 'react-icons/lib/md/home';


const Consulting = () => {
	return (
		<div className="consulting-container">
				<div style={{color: '#593910'}}>
				<MdHome size={40} />
				<h3>Konsultacije</h3>
				<p>
					Niste sasvim sigurni kako spakovati stvari, obavestiti komsije, obezbediti prilaz. Pozovite nas
					i besplatno se konsultujte sa nama.
				</p>
			</div>
			
		</div>
	);
} 

export default Consulting; 