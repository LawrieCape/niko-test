import React from 'react';
// import PropTypes from 'prop-types';
import './ProductProducts.scss';

const lfsldgjsldgkj = function ({ products }) {
	if (!products || !products.length) {
		return (null);
	}
	return (
		<div className="product-content-group product-content-group--products">
			{/* <h3>Products</h3> */}
			{products && products.map((product, index) => {
				return (
					<div key={index}>
						<div className="product__wrapper">
							<a className="product" href={product.imageUrl}>
								<img className="product__image" src={product.imageUrl} alt={product.title} width="200" height="200" />
								{product.title ?
									<p className="product__title">{product.title}</p>
								: null }
							</a>
						</div>
					</div>
				);
			})}
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
