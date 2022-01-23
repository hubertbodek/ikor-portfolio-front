import { graphql } from 'gatsby';
import React from 'react';
import Seo from '../components/common/Seo';
import Layout from '../components/Layout';

const Blog = ({ data }) => {
	const {
		site: {
			siteMetadata: { title, description },
		},
	} = data;
	return (
		<Layout>
			<Seo title={title} description={description} pageName='Blog' />
			BLOG
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

export default Blog;
