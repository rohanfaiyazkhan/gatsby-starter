import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export const query = graphql`
	query($slug: String) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			frontmatter {
				title
				date
			}
			html
		}
	}
`

const blog = props => {
	const markdownRemark = props.data.markdownRemark
	return (
		<Layout>
			<h1>{markdownRemark.frontmatter.title}</h1>
			<small>{markdownRemark.frontmatter.date}</small>
			<div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }} />
		</Layout>
	)
}

export default blog
