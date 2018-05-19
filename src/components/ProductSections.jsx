import React from 'react';
// import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import Scrollspy from 'react-scrollspy';
import { StickyContainer, Sticky } from 'react-sticky';
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
	console.log('sections', sections);
	let scrollNavList = [];

	if (sections) {
		scrollNavList = sections.map(section => slugify(section.title));
	}
	console.log('scrollNavList: ', scrollNavList);

	return (
		<div className="product-sections">
			<StickyContainer>
				<Sticky>
					{({ style }) => (
						<div style={style}>
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

				{sections && sections.map((section, index) => (
					<article key={index} className="product-section" id={slugify(section.title)}>
						{/* Title */}
						<h2>{section.title}</h2>

						{/* Intro */}
						<section className="product-content-group">
							{/* <h3>Body</h3> */}
							<ReactMarkdown source={section.body} />
						</section>

						{/* Images */}
						<section className="product-content-group">
							{/* <h3>Images</h3> */}
							{section.images && section.images.map((image, index2) => (
								<a key={index2} className="product-image" href={image.imageUrl}>
									<img key={index2} src={image.imageUrl} alt={image.imageAlt} width="200" height="200" />
								</a>
							))}
						</section>

						{/* PDFs */}
						<section className="product-content-group">
							{/* <h3>PDFs</h3> */}
							{section.pdfs && section.pdfs.map((pdf, index2) => (
								<a key={index2} className="pdf__link" href={pdf.pdfUrl} target="_blank" rel="noopener">
									<img className="pdf__image" src={pdf.pdfThumb} alt={pdf.title} width="200" height="200" />
									<p className="pdf__title">{pdf.title}</p>
								</a>
							))}
						</section>

						{/* Videos */}
						<section className="product-content-group product-content-group--videos">
							{/* <h3>Videos</h3> */}
							{section.videos && section.videos.map((video, index2) => (
								<div key={index2} className="video__wrapper">
									<div className="embed-container">
										<iframe src={`https://www.youtube.com/embed/${video.youTubeId}?showinfo=1&controls=1&rel=0&modestbranding=0&playsinline=1`} title={video.vidDescription} allowFullScreen="allowfullscreen" />
									</div>
								</div>
							))}
						</section>

						{/* Products */}
						<section className="product-content-group">
							{/* <h3>Products</h3> */}
							{section.products && section.products.map((product, index2) => (
								<a key={index2} className="product" href={product.imageUrl}>
									<p className="product__title">{product.title}</p>
									<img className="product__image" src={product.imageUrl} alt={product.title} width="200" height="200" />
								</a>
							))}
						</section>
					</article>
				))}

			</StickyContainer>

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
