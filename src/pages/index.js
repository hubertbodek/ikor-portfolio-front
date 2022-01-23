import * as React from 'react';

import Layout from '../components/Layout';
import Welcome from '../components/pages/main/Welcome';
import Section from '../components/common/Section';
import Example from '../components/Example';
import HappyCustomers from '../components/pages/main/HappyCustomers';
import { graphql } from 'gatsby';
import Percs from '../components/pages/main/Percs';
import Seo from '../components/common/Seo';

const IndexPage = ({ data }) => {
	const {
		site: {
			siteMetadata: { title, description },
		},
	} = data;
	return (
		<Layout>
			<Seo title={title} description={description} pageName='Strona Główna' />
			{/* HERO */}
			<Section
				overlay='bg-gradient-to-tl from-transparent via-transparent to-primary-light/50 opacity-10'
				styles='h-[57vh] sm:h-[70vh] md:h-[80vh] lg:h-[95vh] pt-20'
			>
				<Welcome />
			</Section>
			{/* HAPPY CUSTOMERS */}
			<Section styles='h-[70vh] sm:h-[80vh] bg-gradient-to-r from-primary-light to-primary py-8'>
				<HappyCustomers />
			</Section>
			<Section styles='h-[60vh] sm:h-[70vh] lg:h-[80vh] bg-gradient-to-r from-primary-light to-primary'>
				<Example />
			</Section>
			{/* PERCS */}
			<Section styles='min-h-[60vh] sm:h-[70vh] lg:min-h-[80vh] py-8'>
				<Percs />
			</Section>
			{/* OPINIE */}
			{/*  */}
		</Layout>
	);
};

export default IndexPage;

export const query = graphql`
	{
		site {
			siteMetadata {
				description
				title
			}
		}
	}
`;
