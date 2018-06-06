import React from 'react';
// import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import Helmet from 'react-helmet';
import FormNikotrack from '../components/forms/FormNikotrack';
import FormConveyors from '../components/forms/FormConveyors';
import FormCranes from '../components/forms/FormCranes';

const queryString = require('query-string');

let enquiryType;

class ContactPageTemplate extends React.Component {
	componentDidMount() {
		// const event = new Event('change');
		enquiryType = queryString.parse(location.search).enquiryType;

		console.log('enquiryType:', enquiryType);

		// parsed.enquiryType = 'test321123';
		// location.search = queryString.stringify(parsed);

		const enquiryTypeEl = document.getElementById('DdlEnquiryType');

		if (enquiryType) {
			enquiryTypeEl.value = enquiryType;

			this.selectForm(null, enquiryType);
		}
	}

	selectForm(event, value) {
		// const enquiryType = event.target.value;
		if (!event) {
			enquiryType = value;
		} else {
			enquiryType = event.target.value;
		}
		console.log('enquiryType2: ', enquiryType);

		const allForms = document.querySelectorAll('.enquiry-form');
		const selectedForm = document.querySelector(`.enquiry-form[data-enquiry='${enquiryType}']`);

		console.log('selectedForm: ', selectedForm);

		let form;
		for (let i = 0, j = allForms.length; i < j; i++) {
			form = allForms[i];
			if (form !== selectedForm) {
				// form.style.display = 'none';
				form.setAttribute('aria-hidden', true);
			} else {
				// form.style.display = 'block';
				form.setAttribute('aria-hidden', false);
			}
		}

		// TODO: update page url with the infinite reloading issue
		// location.search = queryString.stringify({ enquiryType: enquiryType });
	}

	render() {
		const { data } = this.props;
		const { title } = data.markdownRemark.frontmatter;
		const { html } = data.markdownRemark;

		return (
			<div className="container-fluid">
				<article className="page-body">
					<Helmet title="Contact | Niko">
						<body className="body--contact" />
					</Helmet>

					<header className="page-header">
						<h1 className="">{title || 'Contact'}</h1>
						{/* <ReactMarkdown className="rich-text" source={html} /> */}

						<div className="form-field form-field--select">
							<label className="form-field__label" htmlFor="DdlEnquiryType">Enquiry Type</label>
							<div className="form-field__input">
								<select id="DdlEnquiryType" className="" name="DdlEnquiryType" data-placeholder="e.g. Mrs" onChange={this.selectForm}>
									<option value="nikotrack" selected>Nikotrack</option>
									<option value="overhead-conveyors">Overhead Conveyors</option>
									<option value="workstation-cranes">Workstation Cranes</option>
								</select>
								<svg className="input__select-icon">
									<use xlinkHref="#svg--arrow-dropdown" />
								</svg>
							</div>
						</div>
					</header>

					<FormNikotrack enquiryType="nikotrack" isHidden="false" />
					<FormConveyors enquiryType="overhead-conveyors" isHidden="true" />
					<FormCranes enquiryType="workstation-cranes" isHidden="true" />

				</article>
			</div>
		);
	}
}

export default ContactPageTemplate;

export const contactPageQuery = graphql`
	query ContactPage($id: String!) {
		markdownRemark(id: { eq: $id }) {
			html
			frontmatter {
				title
			}
		}
	}
`;
