import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import ProductSections from '../components/ProductSections';

export const ProductPageTemplate = ({
	title,
	metaDescription,
	heroImage,
	heroDescription,
	sections,
}) => {
	const stringThing = `url(${heroImage.childImageSharp.resize.src})`;
	const styles = { backgroundImage: stringThing };
	return (
		<div>
			<Helmet>
				<title>
					{`${title} | Niko`}
				</title>
				<meta name="description" content={`${metaDescription}`} />
			</Helmet>

			<header className="page-header">
				<div className="product-hero">
					{/* <img src={heroImage} alt="product hero" /> */}
					<div className="page-header__hero-image" style={styles} />

					<div className="container-fluid">
						<div className="product-hero__content">
							<h1 className="">
								{title}
							</h1>
							<ReactMarkdown source={heroDescription} />
						</div>
					</div>
				</div>
			</header>

			<div className="container-fluid">
				<article className="page-body page-body--product">

					<ProductSections sections={sections} />
				</article>
			</div>
		</div>
	);
};

ProductPageTemplate.propTypes = {
	// content: PropTypes.string.isRequired,
	// contentComponent: PropTypes.func,
	title: PropTypes.string,
	// sections:
};

const ProductPage = ({ data }) => {
	const post = data.markdownRemark;
	// const { markdownRemark: post } = data;

	return (
		<ProductPageTemplate
			title={post.frontmatter.title}
			metaDescription={post.frontmatter.metaDescription}
			heroImage={post.frontmatter.heroImage}
			heroDescription={post.frontmatter.heroDescription}
			sections={post.frontmatter.customSections}
		/>
	);
};
ProductPage.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.object,
	}),
};

export default ProductPage;

export const pageQuery = graphql`
	query ProductPageByID($id: String!) {
		markdownRemark(id: { eq: $id }) {
			id
			html
			frontmatter {
				title
				metaDescription
				navTitle
				# heroImage
				heroImage {
					childImageSharp {
						resize(width: 1520, height: 855) {
							src
						}
					}
				}
				heroDescription
				customSections {
					title
					navTitle
					body
					images {
						imageUrl {
							childImageSharp {
								resize(width: 800, height: 600) {
									src
								}
							}
						}
						imageAlt
					}
					videos {
						youTubeId
						vidDescription
					}
					flipbooks {
						issueId
					}
				}
			}
		}
	}
`;
