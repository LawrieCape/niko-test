import React from 'react';
// import PropTypes from 'prop-types';
// import './Services.scss';

const lfsldgjsldgkj = function ({ products }) {
	return (
		<div className="product-content-group">
			{/* <h3>Products</h3> */}
			{products && products.map((product, index) => (
				<a key={index} className="product" href={product.imageUrl}>
					<p className="product__title">{product.title}</p>
					<img className="product__image" src={product.imageUrl} alt={product.title} width="200" height="200" />
				</a>
			))}
		</div>
	);
};

lfsldgjsldgkj.propTypes = {
	// services: PropTypes.arrayOf(PropTypes.shape({
	// 		title: PropTypes.string,
	// 		imageUrl: PropTypes.string,
	// 		imageAlt: PropTypes.string,
	// 		description: PropTypes.string,
	// 	})),
};

export default lfsldgjsldgkj;
