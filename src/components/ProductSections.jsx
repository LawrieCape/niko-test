import React from 'react';
// import PropTypes from 'prop-types';
import Scrollspy from 'react-scrollspy';
// import { StickyContainer, Sticky } from 'react-sticky';
import ProductImages from '../components/product/ProductImages';
import ProductPdfs from '../components/product/ProductPdfs';
import ProductProducts from '../components/product/ProductProducts';
import ProductRichText from '../components/product/ProductRichText';
import ProductVideos from '../components/product/ProductVideos';
import './ProductSections.scss';

const Sticky = require('sticky-js');


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
	let offset = 0;

	if (sections) {
		scrollNavList = sections.map(section => slugify(section.title));
	}

	// Only do this on live site (but static build)
	if (typeof window !== 'undefined') {
		const sticky = new Sticky('.js-sticky');
		offset = -window.innerHeight / 2;
	}

	return (
		<div className="product-info">

			<div className="product-info__sidebar" data-sticky-container>
				{/* {({ style }) => ( */}
				<div className="js-sticky" data-sticky-wrap data-sticky-for="600">
					<Scrollspy items={scrollNavList} className="product-page__nav" currentClassName="is-current" componentTag="nav" offset={offset}>
						{sections && sections.map((section, index) => (
							<a key={index} className="product-page__nav__link" href={`#${slugify(section.title)}`}>{section.title}</a>
						))}
					</Scrollspy>
				</div>
				{/* )} */}

				{/* <nav className="product-page__nav">
					{sections && sections.map((section, index) => (
						<a key={index} href={`#${slugify(section.title)}`}>{section.title}</a>
					))}
				</nav> */}
			</div>

			<div className="product-info__main">
				<div className="product-sections">
					{sections && sections.map((section, index) => (
						<section key={index} className="product-section" id={slugify(section.title)}>
							{/* Title */}
							<h2>{section.title}</h2>
							<div className="row">
								{section.body ?
									<div className="col-sm-12 col-md-12 col-lg-7">
										{/* Intro */}
										<ProductRichText richText={section.body} />
									</div>
								: null }

								<div className="col-sm-12 col-md-12 col-lg-5">
									{/* Images */}
									<ProductImages images={section.images} />

									{/* PDFs */}
									<ProductPdfs pdfs={section.pdfs} />

									{/* Videos */}
									<ProductVideos videos={section.videos} />
								</div>
								<div className="col-sm-12 col-md-12 col-lg-12">
									{/* Products */}
									<ProductProducts products={section.products} />
								</div>
							</div>

						</section>
					))}
				</div>
			</div>

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
