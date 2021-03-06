import React from 'react';
import Link from 'gatsby-link';
// import Link from 'gatsby-link';
import './SiteFooter.scss';

import IconFacebook from '-!babel!svg-react-loader!../img/font-awesome/brands/facebook.svg';
import IconTwitter from '-!babel!svg-react-loader!../img/font-awesome/brands/twitter.svg';
import IconLinkedIn from '-!babel!svg-react-loader!../img/font-awesome/brands/linkedin.svg';
import IconYouTube from '-!babel!svg-react-loader!../img/font-awesome/brands/youtube.svg';

const SiteFooter = ({ posts }) => {
	return (
		<footer className="site-footer">
			<div className="container-fluid">
				<div className="footer">
					<div className="footer-links">
						<h4>About</h4>
						<div className="footer-links__group">
							<Link className="footer-links__link" to="/">
								Home
							</Link>
							<Link className="footer-links__link" to="/latest-news">
								Latest News
							</Link>
							<Link className="footer-links__link" to="/contact">
								Contact
							</Link>
							<Link className="footer-links__link" to="/contact">
								Request a Quote
							</Link>
							<Link className="footer-links__link" to="/terms-and-conditions">
								Terms and Conditions
							</Link>
						</div>
					</div>
					<div className="footer-links">
						<h4>Products</h4>
						<div className="footer-links__group">
							{posts
								.map(({ node: post }) => {
									return (
										<Link key={post.id} className="footer-links__link" to={post.fields.slug}>
											{post.frontmatter.navTitle}
										</Link>
									);
								})
							}
						</div>
					</div>

					<div className="footer__contact-details">
						<h4>Contact</h4>
						<p>NikoTrack <br />Suite 9B <br />200 Highpoint Avenue <br /> Portsmouth<br /> RI 02871<br /> USA</p>
						<p>
							Phone: <a href="tel:+14016837525">+1 401 683 7525</a><br />
						</p>
						<p>Email: <a href="mailto:info@nikotrack.com">info@nikotrack.com</a></p>
					</div>

					{/* <div className="col-sm-12 col-md-4 col-md-4">
						<h2>Social</h2>
						<ul className="footer__social">
							<li><a href="https://twitter.com/nikoltd"><IconTwitter /></a></li>
							<li><a href="https://www.facebook.com/NikoLtd"><IconFacebook /></a></li>
							<li><a href="https://www.linkedin.com/company/niko-ltd"><IconLinkedIn /></a></li>
							<li><a href="https://www.youtube.com/user/NikoLimited"><IconYouTube /></a></li>
						</ul>

						<h2>Logos</h2>
						<ul className="footer__logos">
							<li><a href="#"><img src="https://dummyimage.com/150x75/" alt="ISO logos" /></a></li>
							<li><a href="#"><img src="https://dummyimage.com/150x75/" alt="FSB Member" /></a></li>
							<li><a href="#"><img src="https://dummyimage.com/150x75/" alt="LEEA Full Member" /></a></li>
						</ul>
					</div> */}
				</div>
			</div>

			<div className="footer__copyright">
				<div className="container-fluid">
					<p>&copy; 2018 NikoTrack All Rights Reserved</p>
				</div>
			</div>
		</footer>
	);
};

export default SiteFooter;
