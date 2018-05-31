import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import ProductSections from '../components/ProductSections';

export const ProductPageTemplate = ({
	title,
	heroImage,
	heroDescription,
	sections,
}) => {
	return (
		<div className="container-fluid">
			<article className="page-body page-body--product">
				<Helmet title={`${title} | Niko`} />

				<header className="page-header">
					<img src={heroImage} alt="product hero" />
					<h1 className="">{title}</h1>
					<ReactMarkdown source={heroDescription} />
				</header>

				<ProductSections sections={sections} />
			</article>
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
				navTitle
				heroImage
				heroDescription
				customSections {
					title
					body
					images {
						imageUrl
						imageAlt
					}
					pdfs {
						title
						pdfUrl
						pdfThumb
					}
					videos {
						youTubeId
						vidDescription
					}
					products {
						title
						imageUrl
					}
				}
			}
		}
	}
`;
