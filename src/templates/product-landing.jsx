import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import ProductSections from '../components/ProductSections';

export const ProductPageTemplate = ({
	title,
	sections,
}) => (
	<div className="container">
		<section className="section product-page">
			<Helmet title={`Product | ${title}`} />

			<div className="product-page__body content">
				<h1 className="">{title}</h1>
				<hr />
				<ProductSections sections={sections} />
			</div>
		</section>
	</div>
);

ProductPageTemplate.propTypes = {
	// content: PropTypes.string.isRequired,
	// contentComponent: PropTypes.func,
	title: PropTypes.string,
	// sections:
};

const ProductPage = ({ data }) => {
	const post = data.markdownRemark;
	// const { markdownRemark: post } = data;
	console.log(post);

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
