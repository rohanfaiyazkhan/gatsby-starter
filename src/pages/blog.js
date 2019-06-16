import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

import Layout from '../components/layout'

const BlogPage = () => {
	const data = useStaticQuery(graphql`
		query {
			allMarkdownRemark {
				edges {
					node {
						fields {
							slug
						}
						frontmatter {
							title
							date
						}
					}
				}
			}
		}
	`)
	return (
		<Layout>
			<h1>Blog</h1>
			<p>Posts will show up here later on.</p>
			<ol>
				{data.allMarkdownRemark.edges.map(edge => (
					<li>
						<Link to={`/blog/${edge.node.fields.slug}`}>
							<h2>{edge.node.frontmatter.title}</h2>
							<p>{edge.node.frontmatter.date}</p>
						</Link>
					</li>
				))}
			</ol>
		</Layout>
	)
}

export default BlogPage
