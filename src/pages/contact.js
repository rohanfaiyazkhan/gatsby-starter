import React from 'react';

import Layout from '../components/layout';

const ContactPage = () => {
	return (
		<Layout>
			<h1>Contact</h1>
			<p>
				The best way to reach me is via{' '}
				<a href="https://www.twitter.com/RohanFaiyaz" target="_blank" rel="noopener noreferrer">
					@RohanFaiyaz
				</a>{' '}
				on Twitter!
			</p>
		</Layout>
	);
};

export default ContactPage;
