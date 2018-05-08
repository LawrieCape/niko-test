import React from 'react';
import Link from 'gatsby-link';

// export default class IndexPage extends React.Component {
// 	render() {
const IndexPage = (props) => {
	const { data } = props;
	const { edges: posts } = data.allMarkdownRemark;

	return (
		<section className="section">
			<div className="container">

				{/* product landing pages */}
				<h1 className="has-text-weight-bold is-size-2">Products test</h1>
				{posts
					.filter(post =>
							post.node.frontmatter.templateKey ===
							'product-landing')
					.map(({ node: post }) => (
						<div className="content" key={post.id}>
							<p>
								<Link
									className="has-text-primary"
									to={post.fields.slug}
								>
									{post.frontmatter.title}
								</Link>
							</p>
							<p>
								<Link
									className="button is-small"
									to={post.fields.slug}
								>
									Keep Reading →
								</Link>
							</p>
						</div>
					))}

				<hr className="hr" />
				{/* blog posts */}
				<h1 className="has-text-weight-bold is-size-2">Blog posts</h1>
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
		</section>
	);
};

export default IndexPage;

export const pageQuery = graphql`
	query IndexQuery {
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
