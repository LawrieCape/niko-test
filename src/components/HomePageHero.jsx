import React from 'react';
// import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import ReactMarkdown from 'react-markdown';
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
						const stringThing = `url(${post.frontmatter.heroImage})`;
						const styles = { backgroundImage: stringThing };

						return (
							<Link
								key={post.id}
								className="homepage-hero__link"
								to={post.fields.slug}
							>
								<div className="homepage-hero__link-inner">
									<div className="homepage-hero__image" style={styles} />
									{/* <img src={post.frontmatter.heroImage} alt="product hero" /> */}
									<h2 className="h4">{post.frontmatter.title}</h2>
									<ReactMarkdown source={post.frontmatter.heroDescription} />
									{/* <p>{post.frontmatter.heroDescription}</p> */}
								</div>
							</Link>
						);
					})}
			</nav>
		</div>
	);
};
