import React from 'react';
// import PropTypes from 'prop-types';
// import './ProductFlipbooks.scss';

const ProductFlipbooks = function ({ books }) {
	if (!books || !books.length) {
		return (null);
	}
	return (
		<div className="product-content-group product-content-group--flipbooks">
			{/* <h3>Images</h3> */}
			{books && books.map((book, index) => {
				return (
					<div key={index}>
						<iframe src={`//e.issuu.com/embed.html#33659333/${book.issueId}`} title="flipbook title" allowFullScreen />
					</div>
				);
			})}
		</div>
	);
};

ProductFlipbooks.propTypes = {
	// services: PropTypes.arrayOf(PropTypes.shape({ frameborder="0"
-      allowfullscreen
	// 		title: PropTypes.string,
	// 		imageUrl: PropTypes.string,
	// 		imageAlt: PropTypes.string,
	// 		description: PropTypes.string,
	// 	})),
};

export default ProductFlipbooks;
