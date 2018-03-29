import React from 'react';
import './GreatSelection.css';
import MdDoneAll from 'react-icons/lib/md/done-all';
import FaBookmark from 'react-icons/lib/fa/bookmark';
import MdPayment from 'react-icons/lib/md/payment';

const advantageList = [{
	icon: <MdDoneAll size={40} />,
	title: 'Odličan izbor',
	paragraph: 'Tačnost, profesionalnost, iskustvo.'
}, {
	icon: <FaBookmark size={40} />,
	title: 'Visoki kvaltet',
	paragraph: 'Bezbednost i marljivost.'
}, {
	icon: <MdPayment size={40} />,
	title: 'Najnize cene',
	paragraph: 'Najpovoljniji uslovi za fizička i pravna lica.'
}];

const renderItems = (item, index) => 
  <div className="great-selection-item">
		<div className="great-selection-icon">
			{item.icon}
		</div>
		<h5>{item.title}</h5>
		<p>{item.paragraph}</p>
	</div>

const GreatSelection = () => {
	return (
		<div className="great-selection-list">
		{
			advantageList.map(renderItems)
		}
		</div>
	);
} 

export default GreatSelection; 