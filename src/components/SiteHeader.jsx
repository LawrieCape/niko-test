import React from 'react';
import Link from 'gatsby-link';
import './SiteHeader.scss';
import logo from '../img/logo.png';
import logoExtra from '../img/logo-extra.png';
import { NavBar } from '../components/NavBar';

const SiteHeader = ({ posts }) => {
	return (
		<header className="site-header__wrapper">

			<div className="wee-nav__wrapper2">
				<div className="container-fluid">
					{/* wee nav */}
					<div className="wee-nav__wrapper">

						{/* contact us */}
						<div className="header__contact-us__wrapper">
							Call Now: <a href="tel:+14016837525">+1 401 683 7525</a>
						</div>

						<nav className="wee-nav">
							<Link className="" to="/">
								Home
							</Link>
							<Link className="" to="/latest-news">
								Latest News
							</Link>
							{/* <Link className="" to="/products">
								Products
							</Link>
							<Link className="" to="/services">
								Services
							</Link>
							<Link className="" to="/our-work">
								Our Work
							</Link>
							<Link className="" to="/careers">
								Careers
							</Link> */}
							<Link className="" to="/contact">
								Contact
							</Link>
							<Link className="" to="/contact">
								Request a Quote
							</Link>
						</nav>
					</div>
				</div>
			</div>


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


				</div>
			</div>

			<NavBar posts={posts} />
		</header>
	);
};

export default SiteHeader;
