import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Button from '../../common/Button';
import { Link } from 'gatsby';

const Welcome = () => {
	return (
		<div className='h-full relative'>
			<div className='w-40 xs:w-52 sm:w-72 md:w-80 lg:w-[34rem] absolute bottom-36 sm:bottom-24 md:bottom-1/2 left-4 sm:left-10 sm:text-right z-10'>
				<h1>Jestem Igor</h1>
				<p className='text-xs xs:text-base sm:text-lg md:text-xl'>
					Ze mną nauka metamatyki to czysta przyjemność. Nauczę matematyki
					wszystkich oprócz{' '}
					<span className='underline decoration-red-500 decoration-2'>
						Brajanka.
					</span>{' '}
					👺
				</p>
				<Link to='/o-mnie'>
					<Button type='primary'>Dowiedz się więcej</Button>
				</Link>
			</div>
			<StaticImage
				src='../../../images/igor/igor-hero.png'
				alt='Igor'
				placeholder='blurred'
				layout='constrained'
				className='w-64 sm:w-80 md:w-96 lg:w-[28rem] 2xl:w-[36rem] !absolute bottom-0 -right-8 -scale-x-100'
			/>
		</div>
	);
};

export default Welcome;
