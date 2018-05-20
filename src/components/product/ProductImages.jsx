import React from 'react';
// import PropTypes from 'prop-types';
// import './Services.scss';

const ProductImages = function ({ images }) {
	if (!images) {
		return (null);
	}
	return (
		<div className="product-content-group product-content-group--images">
			{/* <h3>Images</h3> */}
			{images && images.map((image, index) => (
				<a key={index} className="product-image" href={image.imageUrl}>
					<img src={image.imageUrl} alt={image.imageAlt} />
				</a>
			))}
		</div>
	);
};

ProductImages.propTypes = {
	// services: PropTypes.arrayOf(PropTypes.shape({
	// 		title: PropTypes.string,
	// 		imageUrl: PropTypes.string,
	// 		imageAlt: PropTypes.string,
	// 		description: PropTypes.string,
	// 	})),
};

export default ProductImages;
