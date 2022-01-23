import { graphql } from 'gatsby';
import React from 'react';
import Seo from '../components/common/Seo';
import Layout from '../components/Layout';

const AboutMe = ({ data }) => {
	const {
		site: {
			siteMetadata: { title, description },
		},
	} = data;
	return (
		<Layout>
			<Seo title={title} description={description} pageName='O mnie' />O mnie
		</Layout>
	);
};

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

export default AboutMe;
