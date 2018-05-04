import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Content, { HTMLContent } from '../components/Content';

export const BlogPostTemplate = ({
	content,
	contentComponent,
	description,
	title,
}) => {
	const PostContent = contentComponent || Content;

	return (
		<section className="section">
			<Helmet title={`Blog | ${title}`} />
			<div className="container content">
				<h1 className="title is-size-2 has-text-weight-bold is-bold-light">
					{title}
				</h1>
				<p>{description}</p>
				<hr />
				<PostContent content={content} class="content" />
			</div>
		</section>
	);
};

BlogPostTemplate.propTypes = {
	// content: PropTypes.string.isRequired,
	contentComponent: PropTypes.func,
	description: PropTypes.string,
	title: PropTypes.string,
};

const BlogPost = ({ data }) => {
	const post = data.markdownRemark;
	// const { markdownRemark: post } = data;

	console.log('post', post);

	return (
		<BlogPostTemplate
			content={post.html}
			contentComponent={HTMLContent}
			description={post.frontmatter.description}
			title={post.frontmatter.title}
		/>
	);
};

BlogPost.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.object,
	}),
};

export default BlogPost;

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
