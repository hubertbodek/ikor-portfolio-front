import React from 'react';
import Example from './Example';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => {
	return (
		<>
			<Navbar />
			{children}
			<Example />
			<Footer />
		</>
	);
};

export default Layout;
