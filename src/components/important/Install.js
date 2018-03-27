import React, { Component } from 'react';
import './Install.css';
import MdBuild from 'react-icons/lib/md/build';


const Price = () => {
	return (
		<div className="price-container">
				<div style={{color: '#593910'}}>
				<MdBuild size={40} />
				<h3>Demontaza/Montaza</h3>
				<p>
					Obuceni radnici,iskusni vozaci,materijal za pakovanje(trake,folije,puc-puc folije,
					kartonske kutije).Sve su to garancije da cemo za vase stvari za koje je neophodno 
					uraditi demonatzu i montazu. 
				</p>
			</div>
			
		</div>
	);
} 

export default Price; 