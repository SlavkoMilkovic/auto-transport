import React, { Component } from 'react';
import './Working.css';


const Working = () => {
	return (
		<section className="sectionWorking">
			<div className="working-container">
				<h3 className="firstHeadWorking">Poslujemo:</h3>
				<h4 className="workingText-container">
					Selidbe MG posluju na teritoriji cele Srbije i u inostranstvu sa profesionalnim, obučenim radnicima uz svu potrebnu opremu. Mogućnost dogovora
					sa kompanijama povodom stalne saradnje i razne druge pogodnosti za fizicka lica.
				</h4>
			</div>
			<div className="workingList-container">
					<h3 className="secondHeadWorking">Izdvaja nas:</h3>
					<h4>
						<ul>
							<li>Odgovoran pristup prema svakom poslu i klijentu</li>
							<li>Profesionalni i strucni radnici</li>
							<li>Prihvatamo i realizujemo velike i male selidbe</li>
							<li>Postujemo rokove i uslove</li>
							<li>Konkurentne cene prilagodjene nasim standardima</li>
						</ul>
					</h4>
			</div>
		</section>
	);
} 

export default Working; 