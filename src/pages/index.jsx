import React from 'react';
import Helmet from 'react-helmet';
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
		<div className="container-fluid">
			<div className="page-body">
				<Helmet title="Home | Niko" />

				<header className="page-header">
					<h1 className="">Home</h1>
				</header>

				<div className="row">
					{/* <div className="col-sm-12">

						<h1>Some medium length header</h1>
						<h2>Some medium length header</h2>
						<h3>Some medium length header</h3>
						<h4>Some medium length header</h4>
						<h5>Some medium length header</h5>
						<h6>Some medium length header</h6>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

					</div> */}
					<div className="col-sm-12">

						{/* product landing pages */}
						<HomePageHero posts={posts} />

					</div>
				</div>
			</div>
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
						templateKey
						order
						title
						navTitle
						heroImage
						heroDescription
					}
				}
			}
		}
	}
`;
