import React from 'react';
// import PropTypes from 'prop-types';
import { navigateTo } from 'gatsby-link';
import Recaptcha from 'react-google-recaptcha';
import { RECAPTCHA_KEY } from './ReCaptchaKey';
import { encodeFormData } from './encodeFormData';

class ContactForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};

		this.handleChange = this.handleChange.bind(this);
		this.handleAttachment = this.handleAttachment.bind(this);
		this.handleRecaptcha = this.handleRecaptcha.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	handleAttachment(e) {
		this.setState({ [e.target.name]: e.target.files[0] });
	}

	handleRecaptcha(value) {
		this.setState({ 'g-recaptcha-response': value });
	}

	handleSubmit(e) {
		e.preventDefault();
		const form = e.target;

		const encodedData = encodeFormData({
			'form-name': form.getAttribute('name'),
			...this.state,
		});

		fetch('/', {
			method: 'POST',
			// headers: { 'Content-Type': 'multipart/form-data' },
			// headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: encodedData,
		})
			.then((response) => {
				console.log('response: ', response);
			})
			.then((myJson) => {
				console.log('myJson: ', myJson);
			})
			.then(() => {
				return navigateTo(form.getAttribute('action'));
			})
			.catch((error) => {
				return alert(error);
			});
	}

	render() {
		return (
			<form
				className="form enquiry-form"
				name="contactNikotrack"
				method="POST"
				action="/"
				data-enquiry="nikotrack"
				aria-hidden="false"
				data-netlify="true"
				data-netlify-honeypot="bot-field1"
				data-netlify-recaptcha="true"
				onSubmit={this.handleSubmit}
			>
				<noscript>
					<p>Sorry, this form won’t work with Javascript disabled</p>
				</noscript>
				<input type="hidden" name="form-name" value="contactNikotrack" />

				<div className="row">
					<div className="col-sm-12">
						<h2 className="h4">Nikotrack</h2>
						<p>
							<strong>Welcome</strong>
							<br />
							Thank you for visiting our website. If you have a particular application
							that you would like us to advise on and provide a quotation, then please
							use this form. You can also upload up to 2 files you consider helpful.
						</p>
					</div>
				</div>
				<div className="row">
					{/* <fieldset>
						<legend>Fieldset Legend</legend>

						<div className="row">
							<div className="col-sm-12">
								<p>something</p>
							</div>
						</div>
					</fieldset> */}

					<fieldset>
						<legend>General Info</legend>

						<div className="row">
							<div className="form-field col-sm-6">
								{/* <!-- Label --> */}
								<label className="form-field__label" htmlFor="frmNikotrackName">
									Name
								</label>

								{/* <!-- Input --> */}
								<input
									className="form-field__input data__input_class"
									id="frmNikotrackName"
									name="frmNikotrackName"
									placeholder="Name"
									type="text"
									onChange={this.handleChange}
								/>
							</div>
							<div className="form-field col-sm-6">
								{/* <!-- Label --> */}
								<label className="form-field__label" htmlFor="frmNikotrackEmail">
									Email Address
								</label>

								{/* <!-- Input --> */}
								<input
									className="form-field__input data__input_class"
									id="frmNikotrackEmail"
									name="frmNikotrackEmail"
									placeholder="Email Address"
									type="text"
									onChange={this.handleChange}
								/>
							</div>

							<div className="form-field col-sm-6">
								{/* <!-- Label --> */}
								<label className="form-field__label" htmlFor="frmNikotrackPhoneNumber">
									Phone Number
								</label>

								{/* <!-- Input --> */}
								<input
									className="form-field__input data__input_class"
									id="frmNikotrackPhoneNumber"
									name="frmNikotrackPhoneNumber"
									placeholder="Phone Number"
									type="text"
									onChange={this.handleChange}
								/>
							</div>

							<div className="form-field col-sm-6">
								{/* <!-- Label --> */}
								<label className="form-field__label" htmlFor="frmNikotrackCompany">
									Company
								</label>

								{/* <!-- Input --> */}
								<input
									className="form-field__input data__input_class"
									id="frmNikotrackCompany"
									name="frmNikotrackCompany"
									placeholder="Company"
									type="text"
									onChange={this.handleChange}
								/>
							</div>
						</div>
					</fieldset>

					<fieldset>
						<legend>Product Info</legend>

						<div className="row">
							<div className="form-fields form-fields--flex col-sm-12">
								<p className="form-field__label">Products Interested In</p>
								<div className="form-fields__inner">
									<div className="form-field form-field--checkbox">
										<input
											className="form-field__input"
											id="frmNikotrackInterestedInConveyors"
											name="frmNikotrackInterestedInConveyors"
											type="checkbox"
											onChange={this.handleChange}
										/>
										<label
											className="form-field__label"
											htmlFor="frmNikotrackInterestedInConveyors"
										>
											Overhead Conveyors
										</label>
									</div>
									<div className="form-field form-field--checkbox">
										<input
											className="form-field__input"
											id="frmNikotrackInterestedInSlidingDoors"
											name="frmNikotrackInterestedInSlidingDoors"
											type="checkbox"
											onChange={this.handleChange}
										/>
										<label
											className="form-field__label"
											htmlFor="frmNikotrackInterestedInSlidingDoors"
										>
											Industrial Sliding Doors
										</label>
									</div>
									<div className="form-field form-field--checkbox">
										<input
											className="form-field__input"
											id="frmNikotrackInterestedInFallArrestProtection"
											name="frmNikotrackInterestedInFallArrestProtection"
											type="checkbox"
											onChange={this.handleChange}
										/>
										<label
											className="form-field__label"
											htmlFor="frmNikotrackInterestedInFallArrestProtection"
										>
											Fall Arrest Protection
										</label>
									</div>
									<div className="form-field form-field--checkbox">
										<input
											className="form-field__input"
											id="frmNikotrackInterestedInCranes"
											name="frmNikotrackInterestedInCranes"
											type="checkbox"
											onChange={this.handleChange}
										/>
										<label
											className="form-field__label"
											htmlFor="frmNikotrackInterestedInCranes"
										>
											Workstation Cranes
										</label>
									</div>
								</div>
							</div>

							<div className="form-field form-field--textarea col-sm-12 col-md-8">
								<label className="form-field__label" htmlFor="frmNikotrackGeneralDetails">
									Please give as many details as you can about your enquiry:
								</label>
								<textarea
									className="form-field__input"
									id="frmNikotrackGeneralDetails"
									name="frmNikotrackGeneralDetails"
									placeholder="Lorem ipsum dolor sit."
									rows="6"
									onChange={this.handleChange}
								/>
							</div>

							<div className="form-field form-field--file col-sm-6">
								<label className="form-field__label" htmlFor="frmNikotrackProjectFile1">
									<span>Upload 1st Project File</span>
								</label>
								<input
									type="file"
									name="frmNikotrackProjectFile1"
									id="frmNikotrackProjectFile1"
									className="form-field__input"
									onChange={this.handleAttachment}
								/>
								<p className="small">
									If you have a file for your project please upload it here.
									Accepted file types: pdf, jpeg, png, gif
								</p>
							</div>

							<div className="form-field form-field--file col-sm-6">
								<label className="form-field__label" htmlFor="frmNikotrackProjectFile2">
									<span>Upload 2nd Project File</span>
								</label>
								<input
									type="file"
									name="frmNikotrackProjectFile2"
									id="frmNikotrackProjectFile2"
									className="form-field__input"
									onChange={this.handleAttachment}
								/>
								<p className="small">
									If you have a second file for your project please upload it
									here. Accepted file types: pdf, jpeg, png, gif
								</p>
							</div>
						</div>
					</fieldset>

					<fieldset>
						<legend>Verify &amp; Submit</legend>

						<div className="row">
							<div className="form-field col-sm-12">
								<Recaptcha
									// ref="recaptcha"
									sitekey={RECAPTCHA_KEY}
									onChange={this.handleRecaptcha}
								/>
								<label className="bot-field" htmlFor="bot-field1">Don&#39;t fill this out: </label>
								<input
									className="bot-field"
									name="bot-field1"
									id="bot-field1"
									onChange={this.handleChange}
								/>
							</div>

							<div className="form-field col-sm-12">
								<button className="" type="submit">
									Submit
								</button>
							</div>
						</div>
					</fieldset>
				</div>
			</form>
		);
	}
}

ContactForm.propTypes = {
	// services: PropTypes.arrayOf(PropTypes.shape({
	// 		title: PropTypes.string,
	// 		imageUrl: PropTypes.string,
	// 		imageAlt: PropTypes.string,
	// 		description: PropTypes.string,
	// 	})),
};

export default ContactForm;
