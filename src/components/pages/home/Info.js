import React, { Component } from 'react';
import './Info.css';


class Info extends Component {
	render() {
		return (
			<section className="info-container">
				<div className="info-text-container">
					<div className="company-name-container">
						<h1>SELIDBE</h1>
						<h1 className="logo-container">MG</h1>
					</div>
					<h3>auto-transport</h3>
					<span />
					<p>Selidbe MG vam nudi siguran i bezbedan transport vaše robe uz najpovoljnije uslove. Posedujemo sve tipove vozila, kombi, kamion, pick-up. Sa nama je svaki dogovor moguć.</p>
				</div>
				<div id="info-triangle-container">
					<div id="info-triangle-left" />
					<div id="info-triangle-right" />
				</div>
			</section>
		)
	}
}


export default Info;