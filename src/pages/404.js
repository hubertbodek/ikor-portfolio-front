import { graphql } from 'gatsby';
import * as React from 'react';
import Seo from '../components/common/Seo';

import Layout from '../components/Layout';

const NotFoundPage = ({ data }) => {
	const {
		site: {
			siteMetadata: { title, description },
		},
	} = data;
	return (
		<Layout>
			<Seo title={title} description={description} pageName='404' />
			<h1>404: Not Found</h1>
			<p>You just hit a route that doesn&#39;t exist... the sadness.</p>
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

export default NotFoundPage;
