/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { StaticImage } from 'gatsby-plugin-image';

const navigation = [
	{ name: 'Strona główna', href: '/' },
	{ name: 'O mnie', href: '/o-mnie' },
	{ name: 'Terminarz', href: '/terminarz' },
	{ name: 'Blog', href: '/blog' },
	{ name: 'Kontakt', href: '/kontakt' },
];
const Navbar = () => {
	return (
		<Disclosure
			as='nav'
			className='sm:absolute w-full h-30 top-0 bg-gradient-to-br from-secondary-light to-secondary sm:bg-none z-50 text-primary-dark border-b border-b-gray-200/50 '
		>
			{({ open }) => (
				<>
					<div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 '>
						<div className='relative flex items-center justify-between h-20'>
							<div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
								{/* Mobile menu button*/}
								<Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
									<span className='sr-only'>Open main menu</span>
									{open ? (
										<XIcon className='block h-6 w-6' aria-hidden='true' />
									) : (
										<MenuIcon className='block h-6 w-6' aria-hidden='true' />
									)}
								</Disclosure.Button>
							</div>
							<div className='flex-1 flex items-center justify-between sm:items-center sm:justify-between py-2'>
								<Link
									to='/'
									className='flex-shrink-0 flex items-center mx-auto sm:mx-0'
								>
									<StaticImage
										src='../images/logo/DK-brain.png'
										alt='Logo'
										placeholder='blurred'
										layout='constrained'
										height={40}
									/>
								</Link>
								<div className='hidden sm:block sm:ml-6'>
									<div className='flex space-x-12 items-center'>
										{navigation.map((item) => (
											<Link
												key={item.name}
												to={item.href}
												className='md:text-lg lg:text-xl transition nav-link-animation'
												activeClassName='text-secondary'
											>
												{item.name}
											</Link>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
					<Disclosure.Panel className='sm:hidden'>
						<div className='px-2 pt-2 pb-3 space-y-1 divide-y'>
							{navigation.map((item) => (
								<Link
									key={item.name}
									to={item.href}
									className='text-white m-auto text-center border-white/25 transition hover:bg-primary-dark hover:text-white block px-3 py-2 text-base font-medium'
								>
									{item.name}
								</Link>
							))}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
};

export default Navbar;
