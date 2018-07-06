import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Content, { HTMLContent } from '../components/Content';

export const BlogPostTemplate = ({
	content,
	contentComponent,
	description,
	title,
	metaDescription,
}) => {
	const PostContent = contentComponent || Content;

	return (
		<div className="container-fluid">
			<article className="page-body">
				<Helmet>
					<title>
						{`${title} | Niko`}
					</title>
					<meta name="description" content={`${metaDescription}`} />
				</Helmet>

				<header className="page-header">
					<h1 className="">{title}</h1>
					{description ?
						<p>{description}</p>
					: null }
				</header>

				<PostContent content={content} className="rich-text" />
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
			metaDescription={post.frontmatter.metaDescription}
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
				metaDescription
				description
			}
		}
	}
`;
