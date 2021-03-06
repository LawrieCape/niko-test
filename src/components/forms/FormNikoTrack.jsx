import React from 'react';
// import PropTypes from 'prop-types';
import { navigateTo } from 'gatsby-link';
import Recaptcha from 'react-google-recaptcha';
import { RECAPTCHA_KEY } from './ReCaptchaKey';
import { encodeFormData } from './encodeFormData';

class FormNikoTrack extends React.Component {
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
				// console.log('response: ', response);
			})
			.then((myJson) => {
				// console.log('myJson: ', myJson);
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
				name="contactNikoTrack"
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
				<input type="hidden" name="form-name" value="contactNikoTrack" />

				<div className="row">
					<div className="col-sm-12">
						<h2 className="h4">NikoTrack</h2>
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
								<label className="form-field__label" htmlFor="frmNikoTrackName">
									Name
								</label>

								{/* <!-- Input --> */}
								<input
									className="form-field__input data__input_class"
									id="frmNikoTrackName"
									name="frmNikoTrackName"
									// placeholder="Name"
									type="text"
									onChange={this.handleChange}
								/>
							</div>
							<div className="form-field col-sm-6">
								{/* <!-- Label --> */}
								<label className="form-field__label" htmlFor="frmNikoTrackEmail">
									Email Address
								</label>

								{/* <!-- Input --> */}
								<input
									className="form-field__input data__input_class"
									id="frmNikoTrackEmail"
									name="frmNikoTrackEmail"
									// placeholder="Email Address"
									type="text"
									onChange={this.handleChange}
								/>
							</div>

							<div className="form-field col-sm-6">
								{/* <!-- Label --> */}
								<label className="form-field__label" htmlFor="frmNikoTrackPhoneNumber">
									Phone Number
								</label>

								{/* <!-- Input --> */}
								<input
									className="form-field__input data__input_class"
									id="frmNikoTrackPhoneNumber"
									name="frmNikoTrackPhoneNumber"
									// placeholder="Phone Number"
									type="text"
									onChange={this.handleChange}
								/>
							</div>

							<div className="form-field col-sm-6">
								{/* <!-- Label --> */}
								<label className="form-field__label" htmlFor="frmNikoTrackCompany">
									Company
								</label>

								{/* <!-- Input --> */}
								<input
									className="form-field__input data__input_class"
									id="frmNikoTrackCompany"
									name="frmNikoTrackCompany"
									// placeholder="Company"
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
											id="frmNikoTrackInterestedInConveyors"
											name="frmNikoTrackInterestedInConveyors"
											type="checkbox"
											onChange={this.handleChange}
										/>
										<label
											className="form-field__label"
											htmlFor="frmNikoTrackInterestedInConveyors"
										>
											Overhead Conveyors
										</label>
									</div>
									<div className="form-field form-field--checkbox">
										<input
											className="form-field__input"
											id="frmNikoTrackInterestedInSlidingDoors"
											name="frmNikoTrackInterestedInSlidingDoors"
											type="checkbox"
											onChange={this.handleChange}
										/>
										<label
											className="form-field__label"
											htmlFor="frmNikoTrackInterestedInSlidingDoors"
										>
											Industrial Sliding Doors
										</label>
									</div>
									<div className="form-field form-field--checkbox">
										<input
											className="form-field__input"
											id="frmNikoTrackInterestedInFallArrestProtection"
											name="frmNikoTrackInterestedInFallArrestProtection"
											type="checkbox"
											onChange={this.handleChange}
										/>
										<label
											className="form-field__label"
											htmlFor="frmNikoTrackInterestedInFallArrestProtection"
										>
											Fall Arrest Protection
										</label>
									</div>
									<div className="form-field form-field--checkbox">
										<input
											className="form-field__input"
											id="frmNikoTrackInterestedInCranes"
											name="frmNikoTrackInterestedInCranes"
											type="checkbox"
											onChange={this.handleChange}
										/>
										<label
											className="form-field__label"
											htmlFor="frmNikoTrackInterestedInCranes"
										>
											Workstation Cranes
										</label>
									</div>
								</div>
							</div>

							<div className="form-field form-field--textarea col-sm-12 col-md-8">
								<label className="form-field__label" htmlFor="frmNikoTrackGeneralDetails">
									Please give as many details as you can about your enquiry:
								</label>
								<textarea
									className="form-field__input"
									id="frmNikoTrackGeneralDetails"
									name="frmNikoTrackGeneralDetails"
									// placeholder="Lorem ipsum dolor sit."
									rows="6"
									onChange={this.handleChange}
								/>
							</div>

							<div className="form-field form-field--file col-sm-6">
								<label className="form-field__label" htmlFor="frmNikoTrackProjectFile1">
									<span>Upload 1st Project File</span>
								</label>
								<input
									type="file"
									name="frmNikoTrackProjectFile1"
									id="frmNikoTrackProjectFile1"
									className="form-field__input"
									onChange={this.handleAttachment}
								/>
								<p className="small">
									If you have a file for your project please upload it here.
									Accepted file types: pdf, jpeg, png, gif
								</p>
							</div>

							<div className="form-field form-field--file col-sm-6">
								<label className="form-field__label" htmlFor="frmNikoTrackProjectFile2">
									<span>Upload 2nd Project File</span>
								</label>
								<input
									type="file"
									name="frmNikoTrackProjectFile2"
									id="frmNikoTrackProjectFile2"
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
								<p>Personal Information Statement: This form collects your name, company name, location and email address so that our support team can assist you with your inquiry. We do not share this information with any other third parties. Consent Required *</p>
								<div className="form-field form-field--checkbox">
									<input
										className="form-field__input"
										id="frmNikoTrackConsent"
										name="frmNikoTrackConsent"
										type="checkbox"
										onChange={this.handleChange}
										required
									/>
									<label
										className="form-field__label"
										htmlFor="frmNikoTrackConsent"
									>
										I Agree
									</label>
								</div>
							</div>
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

FormNikoTrack.propTypes = {
	// services: PropTypes.arrayOf(PropTypes.shape({
	// 		title: PropTypes.string,
	// 		imageUrl: PropTypes.string,
	// 		imageAlt: PropTypes.string,
	// 		description: PropTypes.string,
	// 	})),
};

export default FormNikoTrack;
