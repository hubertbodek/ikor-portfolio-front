import * as React from 'react';

import Layout from '../components/layout';
import Welcome from '../components/Welcome';
import Section from '../components/common/Section';
import Example from '../components/Example';

const IndexPage = () => (
	<Layout>
		{/* HERO */}
		<Section styles='h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] pt-20 bg-gradient-to-r from-primary-light to-primary'>
			<Welcome />
		</Section>
		{/* COUNTER */}
		<Section styles='h-[60vh] sm:h-[70vh] lg:h-[80vh] bg-primary'>
			<Example />
		</Section>
		{/* OPINIE */}
		{/*  */}
	</Layout>
);

export default IndexPage;
