import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';

const IndexPage = () => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					name
				}
			}
		}
	`);

	return (
		<Layout>
			<h1>Hello.</h1>
			<h2>I'm {data.site.siteMetadata.name}, a full-stack developer living in Bangladesh.</h2>
			<p>
				Need a developer? <Link to="/contact">Contact me.</Link>
			</p>
		</Layout>
	);
};

export default IndexPage;
