import React from 'react';
// import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import './HomePageHero.scss';

export const HomePageHero = ({ posts }) => {
	return (
		<div className="homepage-hero__wrapper">
			<nav className="homepage-hero">
				{posts
					.filter((post) => {
						return post.node.frontmatter.templateKey === 'product-landing';
					})
					.map(({ node: post }) => {
						// const stringThing = `url(${post.frontmatter.heroImage})`;
						// const styles = { backgroundImage: stringThing };

						return (
							<Link
								key={post.id}
								className="homepage-hero__link"
								to={post.fields.slug}
							>
								<div className="homepage-hero__link-inner">
									{/* <div className="homepage-hero__image" style={styles} /> */}
									<div className="homepage-hero__image-wrapper">
										<img className="homepage-hero__image" src={post.frontmatter.heroImage} alt="product hero" />
									</div>
									<h2 className="homepage-hero__title h5">{post.frontmatter.title}</h2>
								</div>
							</Link>
						);
					})}
			</nav>
		</div>
	);
};
