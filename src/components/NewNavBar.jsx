import React from 'react';
// import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import './NavBar.scss';

export const NewNavBar = ({
	posts,
}) => (
	<div className="nav__wrapper">
		<nav className="nav">
			{posts
				.filter(post =>
						post.node.frontmatter.templateKey ===
						'product-landing')
				.map(({ node: post }) => (
					<div key={post.id}>
						<Link
							className="nav__link"
							to={post.fields.slug}
						>
							{post.frontmatter.title}
						</Link>
					</div>
				))
			}
		</nav>
	</div>
);
