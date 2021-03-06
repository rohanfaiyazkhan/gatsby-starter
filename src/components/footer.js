import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import footerStyles from './footer.module.scss'

const Footer = () => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					name
				}
			}
		}
	`)
	return (
		<footer>
			<p>Created by {data.site.siteMetadata.name}, © 2019</p>
		</footer>
	)
}

export default Footer
