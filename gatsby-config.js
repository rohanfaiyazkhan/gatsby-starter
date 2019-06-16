module.exports = {
	siteMetadata: {
		title: 'Full Stack Developer',
		name: 'Rohan Faiyaz Khan'
	},
	plugins: [
		'gatsby-plugin-sass',
		'gatsby-transformer-remark',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'src',
				path: `${__dirname}/src/`
			}
		}
	]
}
