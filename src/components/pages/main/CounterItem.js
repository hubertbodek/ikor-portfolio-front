import React from 'react';
import { useCountUp } from 'react-countup';

const CounterItem = ({ number, subject }) => {
	const countUpRef = React.useRef(null);
	useCountUp({
		ref: countUpRef,
		start: 0,
		end: number,
		duration: 2,
	});
	return (
		<div className='text-center'>
			<h2 ref={countUpRef} className='text-5xl lg:text-7xl' />
			<span className='text-base lg:text-xl'>{subject}</span>
		</div>
	);
};

export default CounterItem;
