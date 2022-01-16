import React from 'react';
import CounterItem from './CounterItem';

const stats = [
	{
		number: 1000,
		subject: 'Zadowoleni uczniowie',
	},
	{
		number: 200,
		subject: '6 na sprawdzianach',
	},
	{
		number: 400,
		subject: 'Godzin korepetycji miesięcznie',
	},
	{
		number: 200,
		subject: 'Sheesh shesh shesh seeesh',
	},
];

const HappyCustomers = () => {
	return (
		<div className='h-full w-full grid place-items-center'>
			<div className='h-full w-full flex flex-col sm:flex-row sm:space-x-4 justify-between sm:items-center'>
				{stats.map(({ number, subject }) => (
					<CounterItem key={subject} number={number} subject={subject} />
				))}
			</div>
		</div>
	);
};

export default HappyCustomers;
