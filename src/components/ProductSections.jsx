import React from 'react';
// import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import Scrollspy from 'react-scrollspy';
import { StickyContainer, Sticky } from 'react-sticky';
import ProductPdfs from '../components/product/ProductPdfs';
import './ProductSections.scss';


function slugify(text) {
	return text.toString().toLowerCase()
		.replace(/\s+/g, '-') // Replace spaces with -
		.replace(/[^\w-]+/g, '') // Remove all non-word chars
		.replace(/--+/g, '-') // Replace multiple - with single -
		.replace(/^-+/, '') // Trim - from start of text
		.replace(/-+$/, ''); // Trim - from end of text
}

const ServicesComponent = function ({ sections }) {
	let scrollNavList = [];

	if (sections) {
		scrollNavList = sections.map(section => slugify(section.title));
	}

	return (
		<StickyContainer className="product-info">
			<div className="product-info__sidebar">
				<Sticky>
					{({ style }) => (
						<div className="stickydsfdgdfgfd" style={style}>
							<Scrollspy items={scrollNavList} className="product-page__nav" currentClassName="is-current" componentTag="nav" offset={0}>
								{sections && sections.map((section, index) => (
									<div key={index}><a href={`#${slugify(section.title)}`}>{section.title}</a></div>
								))}
							</Scrollspy>
						</div>
					)}

					{/* <nav className="product-page__nav">
						{sections && sections.map((section, index) => (
							<div key={index} className="">
								<ScrollLink name={slugify(section.title)}>{section.title}</ScrollLink>
							</div>
						))}
					</nav> */}

					{/* <nav className="product-page__nav">
						<ul>
							<li>
								<a className="scroll" href="#about">industrial-sliding-doors</a>
							</li>
							<li>
								<a className="scroll" href="#sliding-door-technical-specs">sliding-door-technical-specs</a>
							</li>
							<li>
								<a className="scroll" href="#sliding-door-animations">sliding-door-animations</a>
							</li>
							<li>
								<a className="scroll" href="#sliding-door-fittings">sliding-door-fittings</a>
							</li>
						</ul>
					</nav> */}
				</Sticky>
			</div>

			<div className="product-info__main">
				<div className="product-sections">
					{sections && sections.map((section, index) => (
						<section key={index} className="product-section" id={slugify(section.title)}>
							{/* Title */}
							<h2>{section.title}</h2>

							{/* Intro */}
							<div className="product-content-group">
								{/* <h3>Body</h3> */}
								<ReactMarkdown source={section.body} />
							</div>

							{/* Images */}
							<div className="product-content-group product-content-group--images">
								{/* <h3>Images</h3> */}
								{section.images && section.images.map((image, index2) => (
									<a key={index2} className="product-image" href={image.imageUrl}>
										<img key={index2} src={image.imageUrl} alt={image.imageAlt} />
									</a>
								))}
							</div>

							{/* PDFs */}
							<ProductPdfs pdfs={section.pdfs} />

							{/* Videos */}
							<div className="product-content-group product-content-group--videos">
								{/* <h3>Videos</h3> */}
								{section.videos && section.videos.map((video, index2) => (
									<div key={index2} className="video__wrapper">
										<div className="embed-container">
											<iframe src={`https://www.youtube.com/embed/${video.youTubeId}?showinfo=1&controls=1&rel=0&modestbranding=0&playsinline=1`} title={video.vidDescription} allowFullScreen="allowfullscreen" />
										</div>
									</div>
								))}
							</div>

							{/* Products */}
							<div className="product-content-group">
								{/* <h3>Products</h3> */}
								{section.products && section.products.map((product, index2) => (
									<a key={index2} className="product" href={product.imageUrl}>
										<p className="product__title">{product.title}</p>
										<img className="product__image" src={product.imageUrl} alt={product.title} width="200" height="200" />
									</a>
								))}
							</div>
						</section>
					))}
				</div>
			</div>
		</StickyContainer>
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
