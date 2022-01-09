import React from 'react';

const Section = ({ styles, children }) => {
	return (
		<section className={`px-2 sm:px-6 lg:px-8 ${styles}`}>
			<div className='max-w-7xl h-full mx-auto'>{children}</div>
		</section>
	);
};

export default Section;
