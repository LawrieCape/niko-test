import React from 'react';
import Link from 'gatsby-link';


// export default class LatestNewsPageTemplate extends React.Component {
// 	render() {
const LatestNewsPageTemplate = (props) => {
	const { data } = props;
	const { edges: posts } = data.allMarkdownRemark;

	// const products = posts
	// 	.filter(post => post.node.frontmatter.templateKey === 'product-landing')
	// 	.map(({ node: post }) => (
	// 		console.log('map');
	// 	));

	return (
		<div>
			{/* blog posts */}
			<h1 className="has-text-weight-bold is-size-2">Latest News</h1>
			{posts
				.filter(post =>
						post.node.frontmatter.templateKey === 'blog-post')
				.map(({ node: post }) => (
					<div
						className="content"
						key={post.id}
					>
						<p>
							<Link
								className="has-text-primary"
								to={post.fields.slug}
							>
								{post.frontmatter.title}
							</Link>
							<span> &bull; </span>
							<small>{post.frontmatter.date}</small>
						</p>
						<p>
							{post.excerpt}
							<br />
							<br />
							<Link
								className="button is-small"
								to={post.fields.slug}
							>
								Keep Reading →
							</Link>
						</p>
					</div>
				))}
		</div>
	);
};

export default LatestNewsPageTemplate;

export const latestNewsPageQuery = graphql`
	query LatestNewsPage {
		allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
			edges {
				node {
					excerpt(pruneLength: 400)
					id
					fields {
						slug
					}
					frontmatter {
						title
						templateKey
						date(formatString: "MMMM DD, YYYY")
					}
				}
			}
		}
	}
`;
