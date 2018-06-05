import React from 'react';
// import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import './NavBar.scss';

const Sticky = require('sticky-js');

export const NavBar = ({ posts }) => {
	// let offset = 0;

	// Only do this on live site (but static build)
	if (typeof window !== 'undefined') {
		const sticky = new Sticky('.js-sticky');
		// offset = -window.innerHeight / 2;
	}

	return (
		<div className="">
			<div className="nav__wrapper js-sticky" data-sticky-wrap data-sticky-for="600">
				<div className="container-fluid">
					<nav className="nav" data-sticky-wrap data-sticky-for="600">
						{posts
							.map(({ node: post }) => {
								return (
									<Link key={post.id} className="nav__link" to={post.fields.slug} activeClassName="is-active">
										{post.frontmatter.navTitle}
									</Link>
								);
							})
						}
					</nav>
				</div>
			</div>
		</div>
	);
};
