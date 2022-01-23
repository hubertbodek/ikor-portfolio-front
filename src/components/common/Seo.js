import { Helmet } from 'react-helmet';
import React from 'react';

const Seo = ({ title, description, pageName }) => {
	return (
		<Helmet
			title={`${title} - ${pageName}`}
			meta={[
				{
					name: 'description',
					content: description,
				},
				{
					property: 'og:title',
					content: title,
				},
				{
					property: 'og:description',
					content: description,
				},
				{
					property: 'og:type',
					content: 'website',
				},
				{
					name: 'twitter:creator',
					content: 'Igor Daczewski',
				},
				{
					name: 'twitter:site',
					content: '@Hatimeria',
				},
				{
					name: 'twitter:title',
					content: title,
				},
				{
					name: 'twitter:description',
					content: description,
				},
			]}
		/>
	);
};

export default Seo;
