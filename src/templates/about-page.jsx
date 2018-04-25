import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

export const AboutPageTemplate = ({ title, content }) => (
	<section className="section section--gradient">
		<Helmet title={`${title}`} />
		<div className="container">
			<h2 className="title is-size-3 has-text-weight-bold is-bold-light">{title}</h2>
			<div className="content" dangerouslySetInnerHTML={{ __html: content }} />
		</div>
	</section>
	);
AboutPageTemplate.propTypes = {
	title: PropTypes.string,
	content: PropTypes.string,
};

const AboutPageWrapper = function ({ data }) {
	const post = data.markdownRemark;

	return (
		<AboutPageTemplate
			title={post.frontmatter.title}
			content={post.html}
		/>
	);
};
AboutPageWrapper.propTypes = {
	data: PropTypes.object,
};

export default AboutPageWrapper;

export const aboutPageQuery = graphql`
	query AboutPage($id: String!) {
		markdownRemark(id: { eq: $id }) {
			html
			frontmatter {
				title
			}
		}
	}
`;
