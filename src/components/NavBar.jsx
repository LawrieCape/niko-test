import React from 'react';
// import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import './NavBar.scss';

export const NavBar = ({ posts }) => {
	return (
		<div className="nav__wrapper">
			<div className="container-fluid">
				<nav className="nav js-sticky" data-sticky-wrap data-sticky-for="600">
					{posts
						.map(({ node: post }) => {
							return (
								<Link key={post.id} className="nav__link" to={post.fields.slug}>
									{post.frontmatter.title}
								</Link>
							);
						})
					}
				</nav>
			</div>
		</div>
	);
};
