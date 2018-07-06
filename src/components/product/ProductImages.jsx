import React from 'react';
// import PropTypes from 'prop-types';
import './ProductImages.scss';

const ProductImages = function ({ images }) {
	if (!images || !images.length) {
		return (null);
	}
	return (
		<div className="product-content-group product-content-group--images">
			{/* <h3>Images</h3> */}
			{images && images.map((image, index) => {
				return (
					<div key={index}>
						<a className="product-image" href={image.imageUrl.childImageSharp.resize.src}>
							<img src={image.imageUrl.childImageSharp.resize.src} alt={image.imageAlt} />
						</a>
					</div>
				);
			})}
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
