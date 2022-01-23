import React from 'react';

const Button = ({ children, type }) => {
	const getButtonColor = () =>
		type === 'primary'
			? 'bg-primary hover:bg-secondary focus:ring-blue-500 shadow-secondary/50 hover:shadow-primary/50'
			: 'bg-secondary hover:bg-primary-dark focus:ring-orange-500 shadow-primary hover:shadow-secondary/50';
	return (
		<button
			className={`mt-3 m-auto text-white focus:ring-2 font-medium sm:rounded-md text-xs sm:text-sm md:text-base px-5 py-2.5 text-center transition shadow-lg ${getButtonColor()}`}
		>
			{children}
		</button>
	);
};

export default Button;
