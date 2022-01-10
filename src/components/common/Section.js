import React from 'react';

const Section = ({ overlay, styles, children }) => {
	return (
		<section className={`px-2 sm:px-6 lg:px-8 relative ${styles}`}>
			{overlay && (
				<div
					className={`absolute h-full w-full top-0 left-0 z-10 pointer-events-none ${overlay}`}
				></div>
			)}
			<div className='max-w-7xl h-full mx-auto'>{children}</div>
		</section>
	);
};

export default Section;
