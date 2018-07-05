import React from 'react';
// import PropTypes from 'prop-types';
// import ReactMarkdown from 'react-markdown';
import Helmet from 'react-helmet';

class TermsPageTemplate extends React.Component {
	render() {
		const { data } = this.props;
		const { title } = data.markdownRemark.frontmatter;
		// const { html } = data.markdownRemark;

		return (
			<div className="container-fluid">
				<article className="page-body">
					<Helmet title="Terms & Conditions | Niko">
						<body className="body--contact" />
					</Helmet>

					<header className="page-header">
						<h1 className="">{title || 'Contact'}</h1>
						{/* <ReactMarkdown className="rich-text" source={html} /> */}

						<div className="form-field form-field--select">
							<label className="form-field__label" htmlFor="DdlEnquiryType">Enquiry Type</label>
							<div className="form-field__input">
								<select id="DdlEnquiryType" className="" name="DdlEnquiryType" data-placeholder="e.g. Mrs" onChange={this.selectForm} defaultValue="nikotrack">
									<option value="nikotrack">Nikotrack General Enquiry</option>
									<option value="overhead-conveyors">Overhead Conveyors</option>
									<option value="workstation-cranes">Workstation Cranes</option>
								</select>
								<svg className="input__select-icon">
									<use xlinkHref="#svg--arrow-dropdown" />
								</svg>
							</div>
						</div>
					</header>

					<p>content...</p>

				</article>
			</div>
		);
	}
}

export default TermsPageTemplate;

export const termsPageQuery = graphql`
	query TermsPage($id: String!) {
		markdownRemark(id: { eq: $id }) {
			html
			frontmatter {
				title
			}
		}
	}
`;
