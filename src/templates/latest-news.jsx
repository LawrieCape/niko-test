import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import '../components/LatestNews.scss';


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

		<div className="container-fluid">
			<div className="page-body">
				<Helmet>
					<title>
						Latest News | Niko
					</title>
					<meta name="description" content="NikoTrack Latest News | Overhead Conveyors | Light Cranes | Workstation Cranes Fall Arrest Protection | Heavy Duty Sliding Doors | Finishing Lines | Low Maintenance" />
					<body className="body--latest-news" />
				</Helmet>

				<header className="page-header">
					<h1 className="">
						Latest News
					</h1>
				</header>

				{posts
					.filter((post) => {
						return post.node.frontmatter.templateKey === 'blog-post';
					})
					.map(({ node: post }) => {
						return (
							<article
								className="latest-news__item"
								key={post.id}
							>
								<header>
									<h2 className="h3">
										<Link to={post.fields.slug}>
											{post.frontmatter.title}
										</Link>
									</h2>
									<p className="">
										<small>
											{post.frontmatter.date}
										</small>
									</p>
								</header>

								<p className="">
									{post.excerpt}
								</p>
							</article>
						);
					})}
			</div>
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
						metaDescription
						templateKey
						date(formatString: "MMMM DD, YYYY")
					}
				}
			}
		}
	}
`;
