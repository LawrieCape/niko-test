import React from 'react';
import Link from 'gatsby-link';

import logo from '../img/logo.svg';

const Navbar = () => (
	<nav className="navbar is-transparent">
		<div className="container">
			<div className="navbar-brand">
				<Link className="navbar-item" to="/">
					<img src={logo} alt="Kaldi" style={{ width: '88px' }} />
					<span className="navbar-brand">Company logo</span>
				</Link>
			</div>
			<div className="navbar-start">
				<Link className="navbar-item" to="/about">
					About
				</Link>
				{/* <Link className="navbar-item" to="/products">
					Products
				</Link> */}
				<Link className="navbar-item" to="/services">
					Services
				</Link>
				<Link className="navbar-item" to="/our-work">
					Our Work
				</Link>
				<Link className="navbar-item" to="/careers">
					Careers
				</Link>
				<Link className="navbar-item" to="/contact">
					Contact
				</Link>
			</div>
		</div>
	</nav>
);

export default Navbar;
