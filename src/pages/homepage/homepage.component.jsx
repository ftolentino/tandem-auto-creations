import React from 'react';

import Directory from '../../components/directory/directory.component';

import TACBanner from '../../assets/TAC_Banner.svg';
import './homepage.styles.scss';

const HomePage = () => (
		<div className="homepage">
			<img className="logo"src={TACBanner} alt="Tandem Auto Creations"/>
			<Directory />
		</div>
);

export default HomePage;
