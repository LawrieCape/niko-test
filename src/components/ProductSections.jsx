import React from 'react';
import PropTypes from 'prop-types';
import Content, { HTMLContent } from '../components/Content';
import './ProductSections.scss';
const ReactMarkdown = require('react-markdown');

const ServicesComponent = function ({ sections }) {
	console.log('sections', sections);
	const PostContent = Content;

	return (
		<div className="product-sections">
			{sections && sections.map((section, index) => (
				<article key={index} className="product-section">
					{/* Title */}
					<h2>{section.title}</h2>

					{/* Intro */}
					<section className="product-content-group">
						<h3>Body</h3>
						{/* {section.body}
						<PostContent content={section.body} class="content" /> */}
						<ReactMarkdown source={section.body} />
					</section>

					{/* Images */}
					<section className="product-content-group">
						<h3>Images</h3>
						{section.images && section.images.map((image, index2) => (
							<a key={index2} className="product-image" href={image.imageUrl}>
								<img key={index2} src={image.imageUrl} alt={image.imageAlt} width="100px" height="100px" />
							</a>
						))}
					</section>

					{/* PDFs */}
					<section className="product-content-group">
						<h3>PDFs</h3>
						{section.pdfs && section.pdfs.map((pdf, index2) => (
							<a key={index2} className="pdf__link" href={pdf.pdfUrl} target="_blank" rel="noopener">
								<img className="pdf__image" src={pdf.pdfThumb} alt={pdf.title} width="100px" height="100px" />
								<p className="pdf__title">{pdf.title}</p>
							</a>
						))}
					</section>

					{/* Videos */}
					<section className="product-content-group">
						<h3>Videos</h3>
						{section.videos && section.videos.map((video, index2) => (
							<div key={index2} className="video__wrapper">
								<iframe src={`https://www.youtube.com/embed/${video.youTubeId}?showinfo=1&controls=1&rel=0&modestbranding=0&playsinline=1`} title="YouTube video" allowFullScreen="allowfullscreen" />
							</div>
						))}
					</section>

					{/* Products */}
					<section className="product-content-group">
						<h3>Products</h3>
						{section.products && section.products.map((product, index2) => (
							<a key={index2} className="product" href={product.imageUrl}>
								<p className="product__title">{product.title}</p>
								<img className="product__image" src={product.imageUrl} alt={product.title} width="200px" height="200px" />
							</a>
						))}
					</section>
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
