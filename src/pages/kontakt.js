import { graphql } from 'gatsby';
import React from 'react';
import Seo from '../components/common/Seo';
import Layout from '../components/Layout';

const Contact = ({ data }) => {
	const {
		site: {
			siteMetadata: { title, description },
		},
	} = data;
	return (
		<Layout>
			<Seo title={title} description={description} pageName='Kontakt' />
			Kontakt
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

export default Contact;
