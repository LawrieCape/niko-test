import React from 'react';
// import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import Services from '../components/Services';

export const ServicePageTemplate = ({
	title,
	heading,
	description,
	services,
}) => (
	<section className="section section--gradient">
		<h2 className="has-text-weight-bold is-size-1">{title}</h2>
		<h3 className="has-text-weight-semibold is-size-2">{heading}</h3>
		<p>{description}</p>
		<Services services={services} />
	</section>
);
ServicePageTemplate.propTypes = {
	title: PropTypes.string,
	heading: PropTypes.string,
	description: PropTypes.string,
	services: PropTypes.arrayOf(PropTypes.shape({
			title: PropTypes.string,
			imageUrl: PropTypes.string,
			imageAlt: PropTypes.string,
			description: PropTypes.string,
		})),
};

const ServicePageWrapper = function ({ data }) {
	console.log(data);
	const post = data.markdownRemark;

	return (
		<ServicePageTemplate
			title={post.frontmatter.title}
			heading={post.frontmatter.heading}
			description={post.frontmatter.description}
			services={post.frontmatter.services}
		/>
	);
};
ServicePageWrapper.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.object,
	}),
};

export default ServicePageWrapper;

export const servicePageQuery = graphql`
	query ServicePage($id: String!) {
		markdownRemark(id: { eq: $id }) {
			frontmatter {
				title
				heading
				description
				services {
					title
					imageUrl
					imageAlt
					description
				}
			}
		}
	}
`;
