import React from 'react';
import TACBanner from '../../assets/TAC_Banner.svg';
import './homepage.styles.scss';

const HomePage = () => (
		<div className="homepage">
			<img className="logo"src={TACBanner} alt="Tandem Auto Creations"/>
		</div>
);

export default HomePage;
