import React, { Component } from 'react';
import road from '../../../assets/images/road.jpg';
import './Info.css';


class Info extends Component {
	render() {
		return (
			<section className="info-container">
				<div className="info-text-container">
					<h1 className="compName-container">selidbe MG</h1>
					<h4>Lorem ipsum dolor sit amet</h4>
					<span />
					<p>Lorem ipsum dolor sit amet, usu ei accumsan appetere. Nam aliquam menandri democritum an, cu nec erat ceteros pertinax. Sed ei placerat expetenda, ad iudico albucius mandamus his, suas noluisse his ad. At epicuri menandri pri, tollit necessitatibus id has, no ius viris definitionem.</p>
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