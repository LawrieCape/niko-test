import React from 'react';
// import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import './NavBar.scss';

const Sticky = require('sticky-js');


export class NavBar extends React.Component {
	// constructor(props) {
	// 	super(props);
	// }

	componentDidMount() {
		// Only do this on live site (but static build)
		if (typeof window !== 'undefined') {
			const sticky = new Sticky('.js-sticky');
			// offset = -window.innerHeight / 2;
		}

		const navMenuButton = document.getElementsByClassName('js-mobile-nav-button')[0];
		const navMenu = document.getElementsByClassName('nav')[0];
		console.log('navMenu: ', navMenu);
		navMenuButton.addEventListener('click', (event) => {
			event.preventDefault();
			navMenu.classList.toggle('is-active');
		}, false);
	}

	render() {
		const { posts } = this.props;

		return (
			<div className="">
				<div className="nav__wrapper js-sticky" data-sticky-wrap data-sticky-for="600">
					<div className="container-fluid">
						<div className="mobile-nav-button__wrapper">
							<a className="mobile-nav-button js-mobile-nav-button " href="#">
								Menu
							</a>
						</div>
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
	}
}

// export const NavBar = ({ posts }) => {
// 	// let offset = 0;
//
// 	// Only do this on live site (but static build)
// 	if (typeof window !== 'undefined') {
// 		const sticky = new Sticky('.js-sticky');
// 		// offset = -window.innerHeight / 2;
// 	}
//
// 	return (
// 		<div className="">
// 			<div className="nav__wrapper js-sticky" data-sticky-wrap data-sticky-for="600">
// 				<div className="container-fluid">
// 					<button class="js-mobile-nav-button button">Mobile Nav</button>
// 					<nav className="nav" data-sticky-wrap data-sticky-for="600">
// 						{posts
// 							.map(({ node: post }) => {
// 								return (
// 									<Link key={post.id} className="nav__link" to={post.fields.slug} activeClassName="is-active">
// 										{post.frontmatter.navTitle}
// 									</Link>
// 								);
// 							})
// 						}
// 					</nav>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };
