import React from 'react';
import Link from 'gatsby-link';
import './SiteHeader.scss';
import logo from '../img/logo.png';
import logoExtra from '../img/logo-extra.png';
import { NavBar } from '../components/NavBar';

const SiteHeader = ({ posts }) => {
	return (
		<header className="site-header__wrapper">

			<div className="container-fluid">
				<div className="site-header">

					{/* company logo */}
					<div className="header-logo">
						<Link className="header-logo__link" to="/">
							<img className="header-logo__image" src={logo} alt="NikoTrack logo" />
							<img className="header-logo__image-extra" src={logoExtra} alt="NikoTrack logo extra" />
							<span className="header-logo__title">NikoTrack logo</span>
						</Link>
					</div>

					<div className="wee-nav__wrapper">
						{/* wee nav */}
						<nav className="wee-nav">
							<Link className="wee-nav__link" to="/">
								Home
							</Link>
							<Link className="wee-nav__link" to="/latest-news">
								Latest News
							</Link>
							<Link className="wee-nav__link" to="/contact">
								Contact
							</Link>
							<Link className="wee-nav__link" to="/contact">
								Request a Quote
							</Link>
						</nav>

						{/* contact us */}
						<div className="header__contact-us__wrapper">
							<a href="tel:+14016837525">Call Now: +1 401 683 7525</a>
						</div>
					</div>

				</div>
			</div>

			<NavBar posts={posts} />
		</header>
	);
};

export default SiteHeader;
