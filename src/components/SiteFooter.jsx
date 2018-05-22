import React from 'react';
// import Link from 'gatsby-link';
import './SiteFooter.scss';

import IconFacebook from '-!babel!svg-react-loader!../img/font-awesome/brands/facebook.svg';
import IconTwitter from '-!babel!svg-react-loader!../img/font-awesome/brands/twitter.svg';
import IconLinkedIn from '-!babel!svg-react-loader!../img/font-awesome/brands/linkedin.svg';
import IconYouTube from '-!babel!svg-react-loader!../img/font-awesome/brands/youtube.svg';

const SiteFooter = () => {
	return (
		<footer className="site-footer">
			<div className="row">
				<div className="col-sm-12 col-md-4 col-md-4">
					<h2>Info</h2>
					<ul>
						<li><a href="#">About Niko</a></li>
						<li><a href="#">Blog</a></li>
						<li><a href="#">News</a></li>
						<li><a href="#">Case Studies</a></li>
						<li><a href="#">Contact Niko</a></li>
						<li><a href="#">Buying Information</a></li>
						<li><a href="#">Terms &amp; Conditions</a></li>
						<li><a href="#">Privacy Policy</a></li>
						<li><a href="#">Customer Services</a></li>
					</ul>
				</div>
				<div className="col-sm-12 col-md-4 col-md-4">
					<h2>Contact</h2>
					<p>Niko Ltd <br /> Unit 15-21 Insight Park <br /> Welsh Road East <br /> Southam <br /> Warwickshire <br /> CV47 1NE</p>
					<p>t: + 44 (0) 1926 813111</p>
					<p>f: + 44 (0) 1926 815599</p>
					<p>e: <a href="mailto:sales@niko.co.uk">sales@niko.co.uk</a></p>
				</div>
				<div className="col-sm-12 col-md-4 col-md-4">
					<h2>Social</h2>
					<ul className="footer__social">
						<li><a href="https://twitter.com/nikoltd"><IconTwitter /></a></li>
						<li><a href="https://www.facebook.com/NikoLtd"><IconFacebook /></a></li>
						<li><a href="https://www.linkedin.com/company/niko-ltd"><IconLinkedIn /></a></li>
						<li><a href="https://www.youtube.com/user/NikoLimited"><IconYouTube /></a></li>
					</ul>

					<h2>Logos</h2>
					<ul>
						<li><a href="#"><img src="/img/jpg/iso.jpg" alt="ISO logos" /></a></li>
						<li><a href="#"><img src="/img/png/logo-fsb.png" alt="FSB Member" /></a></li>
						<li><a href="#"><img src="/img/png/logo-leea.png" alt="LEEA Full Member" /></a></li>
					</ul>
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
				</div>
			</div>
		</footer>
	);
};

export default SiteFooter;
