/* This example requires Tailwind CSS v2.0+ */
import React from 'react';
import { Link } from 'gatsby';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

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
			className='absolute w-full h-30 top-0 bg-gradient-to-r sm:bg-white z-10'
		>
			{({ open }) => (
				<>
					<div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 '>
						<div className='relative flex items-center justify-between h-20'>
							<div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
								{/* Mobile menu button*/}
								<Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
									<span className='sr-only'>Open main menu</span>
									{open ? (
										<XIcon className='block h-6 w-6' aria-hidden='true' />
									) : (
										<MenuIcon className='block h-6 w-6' aria-hidden='true' />
									)}
								</Disclosure.Button>
							</div>
							<div className='flex-1 flex items-center justify-between sm:items-stretch sm:justify-between  py-2'>
								<div className='flex-shrink-0 flex items-center mx-auto sm:mx-0'>
									logo
								</div>
								<div className='hidden sm:block sm:ml-6'>
									<div className='flex space-x-6 items-center'>
										{navigation.map((item) => (
											<Link key={item.name} to={item.href}>
												{item.name}
											</Link>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</>
			)}
		</Disclosure>
	);
};

export default Navbar;
