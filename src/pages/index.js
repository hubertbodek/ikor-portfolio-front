import * as React from 'react';

import Layout from '../components/Layout';
import Welcome from '../components/pages/main/Welcome';
import Section from '../components/common/Section';
import Example from '../components/Example';
import HappyCustomers from '../components/pages/main/HappyCustomers';

const IndexPage = () => (
	<Layout>
		{/* HERO */}
		<Section
			overlay='bg-gradient-to-tl from-transparent via-transparent to-secondary-light opacity-20'
			styles='h-[65vh] sm:h-[70vh] md:h-[80vh] lg:h-[95vh] pt-20'
		>
			<Welcome />
		</Section>
		{/* HAPPY CUSTOMERS */}
		<Section styles='h-[70vh] sm:h-[80vh] bg-gradient-to-r from-secondary-light to-secondary py-8'>
			<HappyCustomers />
		</Section>
		<Section styles='h-[60vh] sm:h-[70vh] lg:h-[80vh] bg-gradient-to-r from-secondary-light to-secondary'>
			<Example />
		</Section>
		{/* OPINIE */}
		{/*  */}
	</Layout>
);

export default IndexPage;
