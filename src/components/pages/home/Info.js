import React, { Component } from 'react';
import roadnew from '../../../assets/images/roadnew.jpg';
import './Info.css';


class Info extends Component {
	render() {
		return (
			<section className="info-container">
				<div className="info-text-container">
					<div className="compName-container">
						<h1>selidbe</h1>
						<h1 className="logo-container">MG</h1>
					</div>
					<h4>auto-transport</h4>
					<span />
					<p>selidbe MG vam omogućava siguran i bezbedan transport vaše robe uz najpovoljnije uslove. Posedujemo sve tipove vozila, kombi, kamion, pick-up. Sa nama je svaki dogovor moguć.</p>
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