import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import ProductSections from '../components/ProductSections';

export const ProductPageTemplate = ({
	title,
	sections,
}) => {
	return (
		<div className="container-fluid">
			<article className="">
				<Helmet title={`Product | ${title}`} />

				<header>
					<h1 className="">{title}</h1>
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
