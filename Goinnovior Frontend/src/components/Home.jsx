import React from 'react';
import Company from './Company';
import Process from './Process';
import ProcessCards from './ProcessCards';
import VedioHero from './VedioHero';
import HeroBottom from './HeroBottom';
import Apparels from './Apparels';

const Home = () => {
	return (
		<div>
			<VedioHero/>
			<HeroBottom/>
			<Company/>
			<Process/>
			<ProcessCards/>
			<Apparels/>
		</div>
	);
};

export default Home;