import React from 'react';
// import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import './NavBar.scss';

export const NavBar = ({ posts }) => (
	<div className="nav__wrapper">
		<nav className="nav">
			{posts
				.map(({ node: post }) => (
					<Link key={post.id} className="nav__link" to={post.fields.slug}>
						{post.frontmatter.title}
					</Link>
				))
			}
		</nav>
	</div>
);
