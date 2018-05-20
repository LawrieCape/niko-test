import React from 'react';
// import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
// import './Services.scss';

const ProductRichText = function ({ richText }) {
	return (
		<div className="product-content-group">
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
