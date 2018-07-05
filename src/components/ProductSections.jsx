import React from 'react';
// import PropTypes from 'prop-types';
import Scrollspy from 'react-scrollspy';
// import { StickyContainer, Sticky } from 'react-sticky';
import ProductImages from './product/ProductImages';
import ProductProducts from './product/ProductProducts';
import ProductRichText from './product/ProductRichText';
import ProductVideos from './product/ProductVideos';
import ProductFlipbooks from './product/ProductFlipbooks';
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
		scrollNavList = sections.map((section) => {
			return slugify(section.title);
		});
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
				<div className="js-sticky" data-sticky-wrap data-sticky-for="600" data-margin-top="20">
					<Scrollspy items={scrollNavList} className="product-page__nav" currentClassName="is-current" componentTag="nav" offset={offset}>
						{sections && sections.map((section, index) => {
							return (
								<a key={index} className="product-page__nav__link" href={`#${slugify(section.title)}`}>
									{section.navTitle}
								</a>
							);
						})}
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
					{sections && sections.map((section, index) => {
						const showBody = !!(section.body && !!section.body.length);
						const showImages = !!(section.images && !!section.images.length);
						const showVideos = !!(section.videos && !!section.videos.length);
						const showProducts = !!(section.products && !!section.products.length);
						const showFlipbooks = !!(section.flipbooks && !!section.flipbooks.length);

						const showSideContent = showImages;
						// console.log('showSideContent: ', showSideContent);

						return (
							<section key={index} className="product-section" id={slugify(section.title)}>
								{/* Title */}
								<h2>
									{section.title}
								</h2>
								<div className="row">
									{showBody ? (
										<div className="col-sm-12 col-md-12 col-lg-7">
											{/* Intro */}
											<ProductRichText richText={section.body} />
										</div>
									) : null }

									{showSideContent ? (
										<div className="col-sm-12 col-md-12 col-lg-5">
											{/* Images */}
											<ProductImages images={section.images} />
										</div>
									) : null }

									{showProducts ? (
										<div className="col-sm-12 col-md-12 col-lg-12">
											{/* Products */}
											<ProductProducts products={section.products} />
										</div>
									) : null }

									{showVideos ? (
										<div className="col-sm-12 col-md-12 col-lg-12">
											{/* Videos */}
											<ProductVideos videos={section.videos} />
										</div>
									) : null }

									{showFlipbooks ? (
										<div className="col-sm-12 col-md-12 col-lg-12">
											{/* Products */}
											<ProductFlipbooks books={section.flipbooks} />
										</div>
									) : null }
								</div>
							</section>
						);
					})}
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
