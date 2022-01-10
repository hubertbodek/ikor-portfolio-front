import * as React from 'react';

import Layout from '../components/Layout';
import Welcome from '../components/Welcome';
import Section from '../components/common/Section';
import Example from '../components/Example';

const IndexPage = () => (
	<Layout>
		{/* HERO */}
		<Section
			overlay='bg-gradient-to-tl from-transparent via-transparent to-primary-light opacity-50'
			styles='h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[95vh] pt-20'
		>
			<Welcome />
		</Section>
		{/* COUNTER */}
		<Section styles='h-[60vh] sm:h-[70vh] lg:h-[80vh] bg-gradient-to-r from-primary-light to-primary'>
			<Example />
		</Section>
		<Section styles='h-[60vh] sm:h-[70vh] lg:h-[80vh] bg-gradient-to-r from-primary-light to-primary'>
			<Example />
		</Section>
		{/* OPINIE */}
		{/*  */}
	</Layout>
);

export default IndexPage;
