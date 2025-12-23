import React from 'react';
import Company from './Company';
import Process from './Process';
import ProcessCards from './ProcessCards';
import VedioHero from './VedioHero';
import HeroBottom from './HeroBottom';

const Home = () => {
	return (
		<div>
			<VedioHero/>
			<HeroBottom/>
			<Company/>
			<Process/>
			<ProcessCards/>
		</div>
	);
};

export default Home;