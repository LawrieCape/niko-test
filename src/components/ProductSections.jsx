import React from 'react';
import PropTypes from 'prop-types';
import Content, { HTMLContent } from '../components/Content';
import './ProductSections.scss';

const ServicesComponent = function ({ sections }) {
	console.log('sections', sections);
	const PostContent = HTMLContent;

	return (
		<div className="product-sections">
			{sections && sections.map((section, index) => (
				<article key={index}>
					<h3>{section.title}</h3>
					<PostContent content={section.body} class="content" />
					{section.images && section.images.map((image, index2) => (
						<article key={index2}>
							<h3>{image.imageUrl}</h3>
						</article>
					))}
				</article>
			))}
		</div>
	);
};

ServicesComponent.propTypes = {
	// sections: PropTypes.arrayOf(PropTypes.shape({
	// 		title: PropTypes.string,
	// 		imageUrl: PropTypes.string,
	// 		imageAlt: PropTypes.string,
	// 		description: PropTypes.string,
	// 	})),
};

export default ServicesComponent;
