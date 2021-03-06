module.exports = {
	siteMetadata: {
		title: 'Full Stack Developer',
		name: 'Rohan Faiyaz Khan'
	},
	plugins: [
		'gatsby-plugin-sass',
		'gatsby-plugin-sharp',
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [
					'gatsby-remark-relative-images',
					{
						resolve: 'gatsby-remark-images',
						options: {
							maxWidth: 750,
							linkImagesToOriginal: false
						}
					}
				]
			}
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'src',
				path: `${__dirname}/src/`
			}
		}
	]
}
