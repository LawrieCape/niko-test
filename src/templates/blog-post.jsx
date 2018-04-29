import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

export const BlogPostTemplate = ({ title, description, content }) => (
	<section className="section">
		<Helmet title={`Blog | ${title}`} />
		<div className="container content">
			<h1 className="title is-size-2 has-text-weight-bold is-bold-light">
				{title}
			</h1>
			<p>{description}</p>
			<div
				className="content"
				dangerouslySetInnerHTML={{
					__html: content,
				}}
			/>
		</div>
	</section>
);
BlogPostTemplate.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	content: PropTypes.string,
};

const BLogPostWrapper = ({ data }) => {
	const post = data.markdownRemark;

	return (
		<BlogPostTemplate
			title={post.frontmatter.title}
			description={post.frontmatter.description}
			content={post.html}
		/>
	);
};
BLogPostWrapper.propTypes = {
	data: PropTypes.object,
};

export default BLogPostWrapper;

export const pageQuery = graphql`
	query BlogPostByID($id: String!) {
		markdownRemark(id: { eq: $id }) {
			id
			html
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				title
				description
			}
		}
	}
`;
