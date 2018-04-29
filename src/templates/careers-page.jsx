import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import Jobs from '../components/Jobs';

export const CareersPageTemplate = ({ data }) => {
	const { frontmatter } = data.markdownRemark;

	const {
		title,
		image,
		heading,
		jobs,
		careersEmail,
		recruitersEmail,
	} = frontmatter;

	return (
		<section className="section section--gradient">
			<Helmet title={`${title}`} />
			<div className="container">
				<h2>{title}</h2>
				<p>{image}</p>
				<p>{heading}</p>
				<Jobs
					jobs={jobs}
					careersEmail={careersEmail}
					recruitersEmail={recruitersEmail}
				/>
			</div>
		</section>
	);
};
CareersPageTemplate.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.object,
	}),
};

export default CareersPageTemplate;

export const careersPageQuery = graphql`
	query CareersPage($id: String!) {
		markdownRemark(id: { eq: $id }) {
			frontmatter {
				title
				image
				heading
				jobs {
					title
					description
				}
				careersEmail
				recruitersEmail
			}
		}
	}
`;
