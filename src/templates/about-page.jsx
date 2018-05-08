import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Content, { HTMLContent } from '../components/Content';

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
	const PostContent = contentComponent || Content;

	return (
		<section className="section section--gradient">
			<Helmet title={`${title}`} />
			<div className="container">
				<h2 className="title is-size-3 has-text-weight-bold is-bold-light">
					{title}
				</h2>
				<PostContent content={content} class="content" />
			</div>
		</section>
	);
};

AboutPageTemplate.propTypes = {
	// content: PropTypes.string.isRequired,
	contentComponent: PropTypes.func,
	title: PropTypes.string,
};

const AboutPageWrapper = function ({ data }) {
	const post = data.markdownRemark;
	// const { markdownRemark: post } = data;

	return (
		<AboutPageTemplate
			content={post.html}
			contentComponent={HTMLContent}
			title={post.frontmatter.title}
		/>
	);
};

AboutPageWrapper.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.object,
	}),
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
