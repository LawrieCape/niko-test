import React from 'react';
// import PropTypes from 'prop-types';
import './ProductVideos.scss';

const ProductVideos = function ({ videos }) {
	if (!videos || !videos.length) {
		return (null);
	}
	return (
		<div className="product-content-group product-content-group--videos">
			{/* <h3>Videos</h3> */}
			{videos && videos.map((video, index) => {
				return (
					<div key={index} className="video__wrapper">
						<div className="video__inner">
							<div className="embed-container">
								<iframe src={`https://www.youtube.com/embed/${video.youTubeId}?showinfo=1&controls=1&rel=0&modestbranding=0&playsinline=1`} title={video.vidDescription} allowFullScreen="allowfullscreen" />
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

ProductVideos.propTypes = {
	// services: PropTypes.arrayOf(PropTypes.shape({
	// 		title: PropTypes.string,
	// 		imageUrl: PropTypes.string,
	// 		imageAlt: PropTypes.string,
	// 		description: PropTypes.string,
	// 	})),
};

export default ProductVideos;
