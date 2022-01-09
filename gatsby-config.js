module.exports = {
	siteMetadata: {
		siteUrl: 'https://www.yourdomain.tld',
		title: 'Ikor',
	},
	plugins: [
		'gatsby-plugin-image',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		'gatsby-plugin-postcss',
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: `gatsby-source-strapi`,
			options: {
				apiURL: `http://localhost:1337/api`,
				queryLimit: 1000, // Defaults to 100
				collectionTypes: [`course`],
			},
		},
	],
};
