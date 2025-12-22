import React from 'react';
import Company from './Company';
import Process from './Process';
import ProcessCards from './ProcessCards';

const Home = () => {
	return (
		<div>
			<Company/>
			<Process/>
			<ProcessCards/>
		</div>
	);
};

export default Home;