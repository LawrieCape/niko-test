import React from 'react';
// import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import './HomePageHero.scss';

export const HomePageHero = ({
	posts,
}) => (
	<div className="homepage-hero__wrapper">
		<nav className="homepage-hero">
			{posts
				.filter(post =>
						post.node.frontmatter.templateKey ===
						'product-landing')
				.map(({ node: post }) => (
					<Link
						key={post.id}
						className="homepage-hero__link"
						to={post.fields.slug}
					>
						{post.frontmatter.title}
					</Link>
				))
			}
		</nav>
	</div>
);
