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
		<div className="container-fluid">
			<article className="">
				<Helmet title={`Blog | ${title}`} />

				<header>
					<h1 className="">{title}</h1>
					<p>{description}</p>
				</header>

				<PostContent content={content} class="content" />
			</article>
		</div>
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
