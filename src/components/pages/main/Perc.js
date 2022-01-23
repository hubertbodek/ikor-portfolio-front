import React from 'react';

const Perc = ({ title, description, children }) => {
	console.log(children);
	return (
		<div className='flex items-center p-2'>
			<div className='mr-6 transition hover:scale-110'>{children}</div>
			<div className='flex flex-col flex-1'>
				<h5>{title}</h5>
				<p className='text-sm'>{description}</p>
			</div>
		</div>
	);
};

export default Perc;
