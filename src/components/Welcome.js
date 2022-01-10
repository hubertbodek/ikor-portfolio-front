import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Button from './common/Button';

const Welcome = () => {
	return (
		<div className='h-full relative'>
			<div className='w-40 xs:w-52 sm:w-72 md:w-80 lg:w-[32rem] elf-center absolute top-24 xs:top-36 sm:top-48 md:top-64 left-6 sm:left-10 sm:text-right z-10'>
				<h1 className='text-3xl xs:text-4xl sm:text-5xl md:text-6xl mb-3'>
					Jestem Igor
				</h1>
				<p className='text-xs xs:text-base sm:text-lg md:text-xl text-primary-dark'>
					Ze mną nauka metamatyki to czysta przyjemność. Nauczę matematyki
					wszystkich oprócz{' '}
					<span className='underline decoration-red-500 decoration-2'>
						Brajanka.
					</span>{' '}
					👺
				</p>
				<Button>Dowiedz się więcej</Button>
			</div>
			<StaticImage
				src='../images/igor/hero-bez-tla.png'
				alt='Igor'
				placeholder='blurred'
				layout='constrained'
				className='w-64 sm:w-80 md:w-96 lg:w-[28rem] 2xl:w-[36rem] absolute bottom-0 -right-8'
			/>
		</div>
	);
};

export default Welcome;
