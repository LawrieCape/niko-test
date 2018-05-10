import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import ProductSections from '../components/ProductSections';

export const ProductPageTemplate = ({
	title,
	description,
	sections,
}) => (
	<section className="section">
		<Helmet title={`Product | ${title}`} />
		<div className="container content">
			<h1 className="">{title}</h1>
			<p>{description}</p>
			<ProductSections sections={sections} />
		</div>
	</section>
);

ProductPageTemplate.propTypes = {
	// content: PropTypes.string.isRequired,
	// contentComponent: PropTypes.func,
	description: PropTypes.string,
	title: PropTypes.string,
	// sections:
};

const ProductPage = ({ data }) => {
	const post = data.markdownRemark;
	// const { markdownRemark: post } = data;
	console.log(post);

	return (
		<ProductPageTemplate
			description={post.frontmatter.description}
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
