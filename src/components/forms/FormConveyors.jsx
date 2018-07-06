import React from 'react';
// import PropTypes from 'prop-types';
import { navigateTo } from 'gatsby-link';
import Recaptcha from 'react-google-recaptcha';
import { RECAPTCHA_KEY } from './ReCaptchaKey';
import { encodeFormData } from './encodeFormData';

class FormConveyors extends React.Component {
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
				name="contactConveyors"
				method="POST"
				action="/"
				data-enquiry="overhead-conveyors"
				aria-hidden="true"
				data-netlify="true"
				data-netlify-honeypot="bot-field2"
				data-netlify-recaptcha="true"
				onSubmit={this.handleSubmit}
			>
				<noscript>
					<p>Sorry, this form won’t work with Javascript disabled</p>
				</noscript>
				<input type="hidden" name="form-name" value="contactConveyors" />

				<div className="row">
					<div className="col-sm-12">
						<h2 className="h4">Overhead Conveyors</h2>
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
								<label className="form-field__label" htmlFor="frmConveyorsName">
									Name
								</label>

								{/* <!-- Input --> */}
								<input
									className="form-field__input data__input_class"
									id="frmCoveyorsName"
									name="frmConveyorsName"
									// placeholder="Name"
									type="text"
									onChange={this.handleChange}
								/>
							</div>
							<div className="form-field col-sm-6">
								{/* <!-- Label --> */}
								<label className="form-field__label" htmlFor="frmConveyorsEmail">
									Email Address
								</label>

								{/* <!-- Input --> */}
								<input
									className="form-field__input data__input_class"
									id="frmCoveyorsEmail"
									name="frmConveyorsEmail"
									// placeholder="Email Address"
									type="text"
									onChange={this.handleChange}
								/>
							</div>

							<div className="form-field col-sm-6">
								{/* <!-- Label --> */}
								<label className="form-field__label" htmlFor="frmConveyorsPhoneNumber">
									Phone Number
								</label>

								{/* <!-- Input --> */}
								<input
									className="form-field__input data__input_class"
									id="frmCoveyorsPhoneNumber"
									name="frmConveyorsPhoneNumber"
									// placeholder="Phone Number"
									type="text"
									onChange={this.handleChange}
								/>
							</div>

							<div className="form-field col-sm-6">
								{/* <!-- Label --> */}
								<label className="form-field__label" htmlFor="frmConveyorsCompany">
									Company
								</label>

								{/* <!-- Input --> */}
								<input
									className="form-field__input data__input_class"
									id="frmCoveyorsCompany"
									name="frmConveyorsCompany"
									// placeholder="Company"
									type="text"
									onChange={this.handleChange}
								/>
							</div>
						</div>
					</fieldset>

					<fieldset>
						<legend>Conveyor Details</legend>

						<div className="row">
							<div className="form-field form-field--textarea col-sm-12 col-md-8">
								<label className="form-field__label" htmlFor="frmConveyorsConveyorDetails">
									ConveyorsConveyorDetails
								</label>
								<textarea
									className="form-field__input"
									id="frmConveyorsConveyorDetails"
									name="frmConveyorsConveyorDetails"
									// placeholder="Lorem ipsum dolor sit."
									rows="6"
									onChange={this.handleChange}
								/>
							</div>
						</div>
					</fieldset>

					<fieldset>
						<legend>Most Common Part Dimensions</legend>

						<div className="row">
							<div className="form-field col-sm-12 col-md-6 col-lg-4">
								{/* <!-- Label --> */}
								<label
									className="form-field__label"
									htmlFor="frmConveyorsMostCommonPartLength"
								>
									MostCommonPartLength
								</label>

								{/* <!-- Input --> */}
								<input
									className="form-field__input data__input_class"
									id="frmCoveyorsMostCommonPartLength"
									name="frmConveyorsMostCommonPartLength"
									// placeholder="MostCommonPartLength"
									type="text"
									onChange={this.handleChange}
								/>
							</div>
							<div className="form-field col-sm-12 col-md-6 col-lg-4">
								{/* <!-- Label --> */}
								<label
									className="form-field__label"
									htmlFor="frmConveyorsMostCommonPartHeight"
								>
									MostCommonPartHeight
								</label>

								{/* <!-- Input --> */}
								<input
									className="form-field__input data__input_class"
									id="frmCoveyorsMostCommonPartHeight"
									name="frmConveyorsMostCommonPartHeight"
									// placeholder="MostCommonPartHeight"
									type="text"
									onChange={this.handleChange}
								/>
							</div>
							<div className="form-field col-sm-12 col-md-6 col-lg-4">
								{/* <!-- Label --> */}
								<label
									className="form-field__label"
									htmlFor="frmConveyorsMostCommonPartWidth"
								>
									MostCommonPartWidth
								</label>

								{/* <!-- Input --> */}
								<input
									className="form-field__input data__input_class"
									id="frmCoveyorsMostCommonPartWidth"
									name="frmConveyorsMostCommonPartWidth"
									// placeholder="MostCommonPartWidth"
									type="text"
									onChange={this.handleChange}
								/>
							</div>
							<div className="form-field col-sm-12 col-md-6 col-lg-4">
								{/* <!-- Label --> */}
								<label
									className="form-field__label"
									htmlFor="frmConveyorsMostCommonPartWeight"
								>
									MostCommonPartWeight
								</label>

								{/* <!-- Input --> */}
								<input
									className="form-field__input data__input_class"
									id="frmCoveyorsMostCommonPartWeight"
									name="frmConveyorsMostCommonPartWeight"
									// placeholder="MostCommonPartWeight"
									type="text"
									onChange={this.handleChange}
								/>
							</div>
						</div>
					</fieldset>

					<fieldset>
						<legend>Largest Part Dimensions</legend>

						<div className="row">
							<div className="form-field col-sm-12 col-md-6 col-lg-4">
								{/* <!-- Label --> */}
								<label className="form-field__label" htmlFor="frmConveyorsLargestPartLength">
									LargestPartLength
								</label>

								{/* <!-- Input --> */}
								<input
									className="form-field__input data__input_class"
									id="frmCoveyorsLargestPartLength"
									name="frmConveyorsLargestPartLength"
									// placeholder="LargestPartLength"
									type="text"
									onChange={this.handleChange}
								/>
							</div>
							<div className="form-field col-sm-12 col-md-6 col-lg-4">
								{/* <!-- Label --> */}
								<label className="form-field__label" htmlFor="frmConveyorsLargestPartHeight">
									LargestPartHeight
								</label>

								{/* <!-- Input --> */}
								<input
									className="form-field__input data__input_class"
									id="frmCoveyorsLargestPartHeight"
									name="frmConveyorsLargestPartHeight"
									// placeholder="LargestPartHeight"
									type="text"
									onChange={this.handleChange}
								/>
							</div>
							<div className="form-field col-sm-12 col-md-6 col-lg-4">
								{/* <!-- Label --> */}
								<label className="form-field__label" htmlFor="frmConveyorsLargestPartWidth">
									LargestPartWidth
								</label>

								{/* <!-- Input --> */}
								<input
									className="form-field__input data__input_class"
									id="frmCoveyorsLargestPartWidth"
									name="frmConveyorsLargestPartWidth"
									// placeholder="LargestPartWidth"
									type="text"
									onChange={this.handleChange}
								/>
							</div>
							<div className="form-field col-sm-12 col-md-6 col-lg-4">
								{/* <!-- Label --> */}
								<label className="form-field__label" htmlFor="frmConveyorsLargestPartWeight">
									LargestPartWeight
								</label>

								{/* <!-- Input --> */}
								<input
									className="form-field__input data__input_class"
									id="frmCoveyorsLargestPartWeight"
									name="frmConveyorsLargestPartWeight"
									// placeholder="LargestPartWeight"
									type="text"
									onChange={this.handleChange}
								/>
							</div>
						</div>
					</fieldset>

					<fieldset>
						<legend>Additional Information</legend>

						<div className="row">
							<div className="form-field col-sm-12 col-md-6 col-lg-4">
								{/* <!-- Label --> */}
								<label className="form-field__label" htmlFor="frmConveyorsMaxNumberOfParts">
									MaxNumberOfParts
								</label>

								{/* <!-- Input --> */}
								<input
									className="form-field__input data__input_class"
									id="frmCoveyorsMaxNumberOfParts"
									name="frmConveyorsMaxNumberOfParts"
									// placeholder="MaxNumberOfParts"
									type="text"
									onChange={this.handleChange}
								/>
							</div>
							<div className="form-field col-sm-12 col-md-6 col-lg-4">
								{/* <!-- Label --> */}
								<label className="form-field__label" htmlFor="frmConveyorsMostCommonPart">
									MostCommonPart
								</label>

								{/* <!-- Input --> */}
								<input
									className="form-field__input data__input_class"
									id="frmCoveyorsMostCommonPart"
									name="frmConveyorsMostCommonPart"
									// placeholder="MostCommonPart"
									type="text"
									onChange={this.handleChange}
								/>
							</div>
							<div className="form-field col-sm-12 col-md-6 col-lg-4">
								{/* <!-- Label --> */}
								<label className="form-field__label" htmlFor="frmConveyorsLargestPart">
									LargestPart
								</label>

								{/* <!-- Input --> */}
								<input
									className="form-field__input data__input_class"
									id="frmCoveyorsLargestPart"
									name="frmConveyorsLargestPart"
									// placeholder="LargestPart"
									type="text"
									onChange={this.handleChange}
								/>
							</div>
							<div className="form-field col-sm-12 col-md-6 col-lg-4">
								{/* <!-- Label --> */}
								<label className="form-field__label" htmlFor="frmConveyorsLineSpeed">
									LineSpeed
								</label>

								{/* <!-- Input --> */}
								<input
									className="form-field__input data__input_class"
									id="frmCoveyorsLineSpeed"
									name="frmConveyorsLineSpeed"
									// placeholder="LineSpeed"
									type="text"
									onChange={this.handleChange}
								/>
							</div>
							<div className="form-field col-sm-12 col-md-6 col-lg-4">
								{/* <!-- Label --> */}
								<label className="form-field__label" htmlFor="frmConveyorsMaxOvenTemp">
									MaxOvenTemp
								</label>

								{/* <!-- Input --> */}
								<input
									className="form-field__input data__input_class"
									id="frmCoveyorsMaxOvenTemp"
									name="frmConveyorsMaxOvenTemp"
									// placeholder="MaxOvenTemp"
									type="text"
									onChange={this.handleChange}
								/>
							</div>
							<div className="form-field col-sm-12 col-md-6 col-lg-4">
								{/* <!-- Label --> */}
								<label className="form-field__label" htmlFor="frmConveyorsDropLiftsRequired">
									DropLiftsRequired
								</label>

								{/* <!-- Input --> */}
								<input
									className="form-field__input data__input_class"
									id="frmCoveyorsDropLiftsRequired"
									name="frmConveyorsDropLiftsRequired"
									// placeholder="DropLiftsRequired"
									type="text"
									onChange={this.handleChange}
								/>
							</div>
						</div>
					</fieldset>

					<fieldset>
						<legend>Descrition of Project</legend>

						<div className="row">
							<div className="form-field form-field--textarea col-sm-12 col-md-8">
								<label className="form-field__label" htmlFor="frmConveyorsProjectDescription">
									Please supply a description of your finishing process
								</label>
								<textarea
									className="form-field__input"
									id="frmConveyorsProjectDescription"
									name="frmConveyorsProjectDescription"
									// placeholder="Lorem ipsum dolor sit."
									rows="6"
									onChange={this.handleChange}
								/>
							</div>

							<div className="form-field form-field--file col-sm-12 col-md-8">
								<label className="form-field__label" htmlFor="frmConveyorsProjectFile">
									<span>Upload file</span>
								</label>
								<input
									type="file"
									name="frmConveyorsProjectFile"
									id="frmConveyorsProjectFile"
									className="inputfile"
									onChange={this.handleAttachment}
								/>
								<p>
									If you have a file for your project please upload it here.
									Accepted file types: pdf, jpeg, dwg, step
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
								<label className="bot-field" htmlFor="bot-field2">
									Don&#39;t fill this out:{' '}
								</label>
								<input
									className="bot-field"
									name="bot-field2"
									id="bot-field2"
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

FormConveyors.propTypes = {
	// services: PropTypes.arrayOf(PropTypes.shape({
	// 		title: PropTypes.string,
	// 		imageUrl: PropTypes.string,
	// 		imageAlt: PropTypes.string,
	// 		description: PropTypes.string,
	// 	})),
};

export default FormConveyors;
