import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { NewNavBar } from '../components/NewNavBar';
import SiteHeader from '../components/SiteHeader';
import './all.scss';

const TemplateWrapper = ({ children, data }) => {
	const pages = data.allMarkdownRemark.edges;

	return (
		<div>
			<Helmet title="Home | Gatsby + Netlify CMS">
				<html lang="en-GB" />
				<body className="root123" />
			</Helmet>

			<SiteHeader />

			<NewNavBar posts={pages} />

			<div>{children()}</div>
		</div>
	);
};

TemplateWrapper.propTypes = {
	children: PropTypes.func,
};

export default TemplateWrapper;

export const templatePageQuery = graphql`
	query TemplatePage {
		allMarkdownRemark(
			filter: { frontmatter: { templateKey: { eq: "product-landing" } }},
			sort: { order: ASC, fields: [frontmatter___order] }
		) {
			edges {
				node {
					id
					fields {
						slug
					}
					frontmatter {
						title
						templateKey
						order
						date(formatString: "MMMM DD, YYYY")
					}
				}
			}
		}
	}
`;
