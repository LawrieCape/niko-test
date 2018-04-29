import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import CaseStudies from '../components/CaseStudies';

export const OurWorkPageTemplate = ({ data }) => {
	const { frontmatter } = data.markdownRemark;

	const {
 title, image, heading, work, help,
} = frontmatter;

	return (
		<section className="section section--gradient">
			<Helmet title={`${title}`} />
			<div className="container">
				<h2>{title}</h2>
				<p>{image}</p>
				<p>{heading}</p>
				<hr />
				<CaseStudies work={work} />
				<hr />
				<div>
					<h3>{help.title}</h3>
					<p>{help.descriptoin}</p>
					<a className="button" href={help.buttonUrl}>
						{help.buttonText}
					</a>
				</div>
			</div>
		</section>
	);
};
OurWorkPageTemplate.propTypes = {
	data: PropTypes.object,
};

export default OurWorkPageTemplate;

export const ourWorkPageQuery = graphql`
	query OurWorkPage($id: String!) {
		markdownRemark(id: { eq: $id }) {
			frontmatter {
				title
				image
				heading
				work {
					title
					description
					image
				}
				help {
					title
					description
					buttonText
					buttonUrl
				}
			}
		}
	}
`;
