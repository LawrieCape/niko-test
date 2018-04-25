import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Navbar from '../components/Navbar';
import './all.sass';

const TemplateWrapper = ({ children }) => (
	<div>
		<Helmet title="Home | Gatsby + Netlify CMS">
			<html lang="en-GB" />
			<body className="root123" />
		</Helmet>
		<Navbar />
		<div>{children()}</div>
	</div>
);

TemplateWrapper.propTypes = {
	children: PropTypes.func,
};

export default TemplateWrapper;
