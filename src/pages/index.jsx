import React from 'react';
import { HomePageHero } from '../components/HomePageHero';


// export default class IndexPage extends React.Component {
// 	render() {
const IndexPage = (props) => {
	const { data } = props;
	const { edges: posts } = data.allMarkdownRemark;

	// const products = posts
	// 	.filter(post => post.node.frontmatter.templateKey === 'product-landing')
	// 	.map(({ node: post }) => (
	// 		console.log('map');
	// 	));

	return (
		<div>
			{/* product landing pages */}
			<HomePageHero posts={posts} />
		</div>
	);
};

export default IndexPage;

export const pageQuery = graphql`
	query IndexQuery {
		allMarkdownRemark(
			filter: { frontmatter: { templateKey: { eq: "product-landing" } }},
			sort: { order: ASC, fields: [frontmatter___order] }
		) {
			edges {
				node {
					id
					fields {
						slug
					}
					frontmatter {
						title
						templateKey
						order
					}
				}
			}
		}
	}
`;
