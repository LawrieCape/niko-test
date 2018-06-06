import React from 'react';
// import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import Helmet from 'react-helmet';



export function getParameterByName(name, url) {
	if (!url) url = window.location.href;
	name = name.replace(/[\[\]]/g, '\\$&');
	var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
	var results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function selectForm(event) {
	const enquiryType = event.target.value;
	console.log('changed: ', enquiryType);
	const allForms = document.querySelectorAll('.enquiry-form');
	const selectedForm = document.querySelector(`.enquiry-form[data-enquiry='${enquiryType}']`);

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
}

// export default class ContactPageTemplate extends React.Component {
// 	render() {
const ContactPageTemplate = (props) => {
	const { data } = props;
	const { title } = data.markdownRemark.frontmatter;
	const { html } = data.markdownRemark;

	// console.log('contactUsInit()');

	// let typeFromUrl = getParameterByName('enquiryType');
	// let idFromUrl = getParameterByName('hotel');
	//
	// console.log('typeFromUrl:', typeFromUrl);
	// console.log('idFromUrl: ', idFromUrl);

	// const enquiryTypeEl = document.getElementById('DdlEnquiryType');
	// console.log('enquiryTypeEl: ', enquiryTypeEl);

	// enquiryTypeEl.addEventListener('change', selectForm(this.value));

	return (
		<div className="container-fluid">
			<article className="page-body">
				<Helmet title="Contact | Niko">
					<body className="body--contact" />
				</Helmet>

				<header className="page-header">
					<h1 className="">{title || 'Contact'}</h1>
					<ReactMarkdown className="rich-text" source={html} />

					<div className="form-field form-field--select">
						<label className="form-field__label" htmlFor="DdlEnquiryType">label</label>
						<div className="form-field__input">
							<select id="DdlEnquiryType" className="" name="DdlEnquiryType" data-placeholder="e.g. Mrs" onChange={selectForm}>
								<option value="" disabled hidden>placeholder</option>
								<option value="nikotrack">Nikotrack</option>
								<option value="overhead-conveyors">Overhead Conveyors</option>
								<option value="workstation-cranes">Workstation Cranes</option>
							</select>
							<svg className="input__select-icon">
								<use xlinkHref="#svg--arrow-dropdown" />
							</svg>
						</div>
					</div>
				</header>

				<div className="enquiry-form" data-enquiry="nikotrack">Nikotrack</div>
				<div className="enquiry-form" data-enquiry="overhead-conveyors" aria-hidden="true">Overhead Conveyors</div>
				<div className="enquiry-form" data-enquiry="workstation-cranes" aria-hidden="true">Workstation Cranes</div>


				<form className="form">
					<div className="row">
						<div className="col-sm-12">
							<h2 className="h4">Contact Nikotrack</h2>
							<p>
								<strong>Welcome</strong><br />
								Thank you for visiting our website. If you have a particular application that you would like us to advise on and provide a quotation, then please use this form. You can also upload up to 2 files you consider helpful.
							</p>
						</div>
					</div>
					<div className="row">
						<div className="form-field col-sm-6">
							{/* <!-- Label --> */}
							<label className="form-field__label" htmlFor="data__data_id">data__label</label>

							{/* <!-- Input --> */}
							<input className="form-field__input data__input_class" id="data__data_id" name="data__data_id" placeholder="data__placeholder" type="text" />
						</div>
						<div className="form-field col-sm-6">
							{/* <!-- Label --> */}
							<label className="form-field__label" htmlFor="data__data_id">data__label</label>

							{/* <!-- Input --> */}
							<input className="form-field__input data__input_class" id="data__data_id" name="data__data_id" placeholder="data__placeholder" type="text" />
						</div>

						<div className="form-field col-sm-6">
							{/* <!-- Label --> */}
							<label className="form-field__label" htmlFor="data__data_id">data__label</label>

							{/* <!-- Input --> */}
							<input className="form-field__input data__input_class" id="data__data_id" name="data__data_id" placeholder="data__placeholder" type="text" />
						</div>

						<div className="form-field col-sm-6">
							{/* <!-- Label --> */}
							<label className="form-field__label" htmlFor="data__data_id">data__label</label>

							{/* <!-- Input --> */}
							<input className="form-field__input data__input_class" id="data__data_id" name="data__data_id" placeholder="data__placeholder" type="text" />
						</div>

						<div className="form-fields form-fields--flex col-sm-12">
							<p className="form-field__label">Products Interested In</p>
							<div className="form-fields__inner">
								<div className="form-field form-field--checkbox">
									<input className="form-field__input" id="data__data_id05" name="data__data_id05" type="checkbox" />
									<label className="form-field__label" htmlFor="data__data_id05">data_label</label>
								</div>
								<div className="form-field form-field--checkbox">
									<input className="form-field__input" id="data__data_id06" name="data__data_id06" type="checkbox" />
									<label className="form-field__label" htmlFor="data__data_id06">data_label</label>
								</div>
								<div className="form-field form-field--checkbox">
									<input className="form-field__input" id="data__data_id07" name="data__data_id07" type="checkbox" />
									<label className="form-field__label" htmlFor="data__data_id07">data_label</label>
								</div>
								<div className="form-field form-field--checkbox">
									<input className="form-field__input" id="data__data_id08" name="data__data_id08" type="checkbox" />
									<label className="form-field__label" htmlFor="data__data_id08">data_label</label>
								</div>
							</div>
						</div>

						<div className="form-field form-field--textarea col-sm-12">
							<label className="form-field__label" htmlFor="data__data_id09">data_label</label>
							<textarea className="form-field__input" id="data__data_id09" name="data__data_id09" placeholder="Lorem ipsum dolor sit." rows="6" />
						</div>

						<div className="form-field form-field--file col-sm-6">
							<label className="form-field__label" htmlFor="file-1"><span>Upload file</span></label>
							<input type="file" name="file-1[]" id="file-1" className="inputfile" />
						</div>

						<div className="form-field form-field--file col-sm-6">
							<label className="form-field__label" htmlFor="file-2"><span>Upload file</span></label>
							<input type="file" name="file-2[]" id="file-2" className="inputfile" />
						</div>

						<div className="form-field col-sm-12">
							GOOGLE VERIFY
						</div>

						<div className="form-field col-sm-12">
							<button className="">Submit</button>
						</div>

					</div>

				</form>
			</article>
		</div>
	);
};

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
