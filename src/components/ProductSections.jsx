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
				<article key={index} className="product-section">
					{/* Intro */}
					<h2>{section.title}</h2>
					<PostContent content={section.body} class="content" />

					{/* Images */}
					<h3>Images</h3>
					{section.images && section.images.map((image, index2) => (
						<section key={index2}>
							<img src={image.imageUrl} alt={image.imageAlt} width="100px" height="100px" />
						</section>
					))}

					{/* PDFs */}
					<h3>PDFs</h3>
					{section.pdfs && section.pdfs.map((pdf, index2) => (
						<section key={index2}>
							<a href={pdf.pdfUrl} target="_blank" rel="noopener">
								<img src={pdf.pdfThumb} alt={pdf.title} width="100px" height="100px" />
								Download - {pdf.title}
							</a>
						</section>
					))}

					{/* Videos */}
					<h3>Videos</h3>
					{section.videos && section.videos.map((video, index2) => (
						<section key={index2}>
							<iframe src={`https://www.youtube.com/embed/${video.youTubeId}?showinfo=1&controls=1&rel=0&modestbranding=0&playsinline=1`} title="YouTube video" allowFullScreen="allowfullscreen" />
						</section>
					))}

					{/* Products */}
					<h3>Products</h3>
					{section.products && section.products.map((product, index2) => (
						<section key={index2}>
							<p>{product.title}</p>
							<img src={product.imageUrl} alt={product.title} width="100px" height="100px" />
						</section>
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
