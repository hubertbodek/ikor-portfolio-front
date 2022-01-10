import React from 'react';

const Button = ({ children }) => {
	return (
		<button class='mt-3 m-auto text-white bg-secondary hover:bg-primary-dark focus:ring-2 focus:ring-orange-500 font-medium sm:rounded-md text-xs sm:text-sm md:text-base px-5 py-2.5 text-center transition shadow-lg shadow-primary hover:shadow-secondary/50'>
			{children}
		</button>
	);
};

export default Button;
