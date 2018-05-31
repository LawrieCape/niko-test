import React from 'react';
// import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import './ProductRichText.scss';

const ProductRichText = function ({ richText }) {
	if (!richText) {
		return (null);
	}
	return (
		<div className="product-content-group product-content-group--rich-text rich-text">
			{/* <h3>Body</h3> */}
			<ReactMarkdown source={richText} />
		</div>
	);
};

ProductRichText.propTypes = {
	// services: PropTypes.arrayOf(PropTypes.shape({
	// 		title: PropTypes.string,
	// 		imageUrl: PropTypes.string,
	// 		imageAlt: PropTypes.string,
	// 		description: PropTypes.string,
	// 	})),
};

export default ProductRichText;
