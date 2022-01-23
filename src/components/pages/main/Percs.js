import React from 'react';
import {
	AcademicCapIcon,
	BookOpenIcon,
	CalculatorIcon,
	DesktopComputerIcon,
} from '@heroicons/react/outline';
import Perc from './Perc';

const title = 'Lorem, ipsum dolor.';
const description =
	'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex iusto, cum aspernatur eum eius veritatis.';

const Percs = () => {
	return (
		<div className='h-full flex flex-col'>
			<h2 className='ml-16 md:ml-0 md:text-center mb-6'>Dlaczego ja?</h2>
			<div className='grid md:grid-cols-2 gap-8 place-items-center flex-1'>
				<Perc title={title} description={description}>
					<AcademicCapIcon className='h-12 w-12 text-secondary' />
				</Perc>
				<Perc title={title} description={description}>
					<CalculatorIcon className='h-12 w-12 text-secondary' />
				</Perc>
				<Perc title={title} description={description}>
					<DesktopComputerIcon className='h-12 w-12 text-secondary' />
				</Perc>
				<Perc title={title} description={description}>
					<BookOpenIcon className='h-12 w-12 text-secondary' />
				</Perc>
			</div>
		</div>
	);
};

export default Percs;
