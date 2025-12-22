import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/shared/Header';

const HomeLayout = () => {
	return (
		<div className=''>
			<Header/>
			<Outlet/>
		</div>
	);
};

export default HomeLayout;