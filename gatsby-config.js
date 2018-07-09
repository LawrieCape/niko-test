module.exports = {
	siteMetadata: {
		siteUrl: 'https://nikotrack.com',
		title: 'NikoTrack',
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'NikoTrack',
				short_name: 'NikoTrack',
				start_url: '/',
				background_color: '#ffffff',
				theme_color: '#005084',
				display: 'minimal-ui',
				// icon: 'src/images/icon.png', // This path is relative to the root of the site.
			},
		},
		{
			resolve: 'gatsby-plugin-sass',
			options: {
				precision: 6,
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/pages`,
				name: 'pages',
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/img`,
				name: 'images',
			},
		},
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [],
			},
		},
		{
			resolve: 'gatsby-plugin-netlify-cms',
			options: {
				modulePath: `${__dirname}/src/cms/cms.jsx`,
			},
		},
		{
			resolve: 'gatsby-plugin-google-analytics',
			options: {
				trackingId: 'UA-120133379-1', // 'UA-121898594-1' - Daniels test
				// Puts tracking script in the head instead of the body
				head: false,
				// Setting this parameter is optional
				anonymize: true,
				// Setting this parameter is also optional
				respectDNT: true,
				// // Avoids sending pageview hits from custom paths
				// exclude: ['/preview/**', '/do-not-track/me/too/'],
			},
		},
		{
			resolve: 'gatsby-plugin-sitemap',
		},
	],
};
