import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Content, { HTMLContent } from '../components/Content';

export const TermsPostTemplate = ({
	content,
	contentComponent,
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
					<h1 className="">
						{title}
					</h1>
				</header>

				<PostContent content={content} className="rich-text" />
			</article>
		</div>
	);
};

TermsPostTemplate.propTypes = {
	// content: PropTypes.string.isRequired,
	contentComponent: PropTypes.func,
	title: PropTypes.string,
};

const TermsPost = ({ data }) => {
	const post = data.markdownRemark;
	// const { markdownRemark: post } = data;

	return (
		<TermsPostTemplate
			content={post.html}
			contentComponent={HTMLContent}
			title={post.frontmatter.title}
			metaDescription={post.frontmatter.metaDescription}
		/>
	);
};

TermsPost.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.object,
	}),
};

export default TermsPost;

export const pageQuery = graphql`
	query TermsPostByID($id: String!) {
		markdownRemark(id: { eq: $id }) {
			id
			html
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				title
				metaDescription
			}
		}
	}
`;
