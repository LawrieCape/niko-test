import React from 'react';
// import PropTypes from 'prop-types';
import { navigateTo } from 'gatsby-link';
import Recaptcha from 'react-google-recaptcha';
import { RECAPTCHA_KEY } from './ReCaptchaKey';
import { encodeFormData } from './encodeFormData';

class FormCranes extends React.Component {
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
				name="contactCranes"
				method="POST"
				action="/"
				data-enquiry="workstation-cranes"
				aria-hidden="true"
				data-netlify="true"
				data-netlify-honeypot="bot-field3"
				data-netlify-recaptcha="true"
				onSubmit={this.handleSubmit}
			>
				<noscript>
					<p>Sorry, this form won’t work with Javascript disabled</p>
				</noscript>
				<input type="hidden" name="form-name" value="contactCranes" />

				<div className="row">
					<div className="col-sm-12">
						<h2 className="h4">Workstation Cranes</h2>
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
					<fieldset>
						<legend>General Info</legend>

						<div className="row">
							<div className="form-field col-sm-12 col-md-6">
								{/* <!-- Label --> */}
								<label className="form-field__label" htmlFor="frmCranesName">
									Name
								</label>

								{/* <!-- Input --> */}
								<input
									className="form-field__input data__input_class"
									id="frmCranesName"
									name="frmCranesName"
									// placeholder="Name"
									type="text"
									onChange={this.handleChange}
								/>
							</div>
							<div className="form-field col-sm-12 col-md-6">
								{/* <!-- Label --> */}
								<label className="form-field__label" htmlFor="frmCranesEmail">
									Email Address
								</label>

								{/* <!-- Input --> */}
								<input
									className="form-field__input data__input_class"
									id="frmCranesEmail"
									name="frmCranesEmail"
									// placeholder="Email Address"
									type="text"
									onChange={this.handleChange}
								/>
							</div>

							<div className="form-field col-sm-12 col-md-6">
								{/* <!-- Label --> */}
								<label className="form-field__label" htmlFor="frmCranesPhoneNumber">
									Phone Number
								</label>

								{/* <!-- Input --> */}
								<input
									className="form-field__input data__input_class"
									id="frmCranesPhoneNumber"
									name="frmCranesPhoneNumber"
									// placeholder="Phone Number"
									type="text"
									onChange={this.handleChange}
								/>
							</div>

							<div className="form-field col-sm-12 col-md-6">
								{/* <!-- Label --> */}
								<label className="form-field__label" htmlFor="frmCranesCompany">
									Company
								</label>

								{/* <!-- Input --> */}
								<input
									className="form-field__input data__input_class"
									id="frmCranesCompany"
									name="frmCranesCompany"
									// placeholder="Company"
									type="text"
									onChange={this.handleChange}
								/>
							</div>
						</div>
					</fieldset>

					<fieldset>
						<legend>Fieldset Legend</legend>

						<div className="row">
							<div className="form-field col-sm-12 col-md-4">
								{/* <!-- Label --> */}
								<label
									className="form-field__label"
									htmlFor="frmCranesWorkstationMaxWeight"
								>
									WorkstationMaxWeight
								</label>

								{/* <!-- Input --> */}
								<input
									className="form-field__input data__input_class"
									id="frmCranesWorkstationMaxWeight"
									name="frmCranesWorkstationMaxWeight"
									// placeholder="WorkstationMaxWeight"
									type="text"
									onChange={this.handleChange}
								/>
							</div>

							<div className="form-field col-sm-12 col-md-4">
								{/* <!-- Label --> */}
								<label
									className="form-field__label"
									htmlFor="frmCranesBridgeLength"
								>
									BridgeLength
								</label>

								{/* <!-- Input --> */}
								<input
									className="form-field__input data__input_class"
									id="frmCranesBridgeLength"
									name="frmCranesBridgeLength"
									// placeholder="BridgeLength"
									type="text"
									onChange={this.handleChange}
								/>
							</div>

							<div className="form-field col-sm-12 col-md-4">
								{/* <!-- Label --> */}
								<label
									className="form-field__label"
									htmlFor="frmCranesRunwayLength"
								>
									RunwayLength
								</label>

								{/* <!-- Input --> */}
								<input
									className="form-field__input data__input_class"
									id="frmCranesRunwayLength"
									name="frmCranesRunwayLength"
									// placeholder="RunwayLength"
									type="text"
									onChange={this.handleChange}
								/>
							</div>

							<div className="form-field form-field--select col-sm-12 col-md-4">
								<label className="form-field__label" htmlFor="frmCranesFestooning">
									Festooning
								</label>
								<div className="form-field__input">
									<select
										id="frmCranesFestooning"
										className=""
										name="frmCranesFestooning"
										// data-placeholder="e.g. Mrs"
										defaultValue=""
										onChange={this.handleChange}
									>
										<option value="" disabled hidden>
											Choose one
										</option>
										<option value="yes">Yes</option>
										<option value="no">No</option>
									</select>
									<svg className="input__select-icon">
										<use xlinkHref="#svg--arrow-dropdown" />
									</svg>
								</div>
							</div>

							<div className="form-field col-sm-12 col-md-4">
								{/* <!-- Label --> */}
								<label
									className="form-field__label"
									htmlFor="frmCranesHeightToBottomOfTrack"
								>
									HeightToBottomOfTrack
								</label>

								{/* <!-- Input --> */}
								<input
									className="form-field__input data__input_class"
									id="frmCranesHeightToBottomOfTrack"
									name="frmCranesHeightToBottomOfTrack"
									// placeholder="HeightToBottomOfTrack"
									type="text"
									onChange={this.handleChange}
								/>
							</div>

							<div className="form-field col-sm-12 col-md-4">
								{/* <!-- Label --> */}
								<label
									className="form-field__label"
									htmlFor="frmCranesFloorOrCeilingMounted"
								>
									FloorOrCeilingMounted
								</label>

								{/* <!-- Input --> */}
								<input
									className="form-field__input data__input_class"
									id="frmCranesFloorOrCeilingMounted"
									name="frmCranesFloorOrCeilingMounted"
									// placeholder="FloorOrCeilingMounted"
									type="text"
									onChange={this.handleChange}
								/>
							</div>
						</div>
					</fieldset>

					<fieldset>
						<legend>Fieldset Legend</legend>

						<div className="row">
							<div className="form-field col-sm-12 col-md-6">
								{/* <!-- Label --> */}
								<label
									className="form-field__label"
									htmlFor="frmCranesWallFloorColumnMounted"
								>
									WallFloorColumnMounted
								</label>

								{/* <!-- Input --> */}
								<input
									className="form-field__input data__input_class"
									id="frmCranesWallFloorColumnMounted"
									name="frmCranesWallFloorColumnMounted"
									// placeholder="WallFloorColumnMounted"
									type="text"
									onChange={this.handleChange}
								/>
							</div>

							<div className="form-field col-sm-12 col-md-6">
								{/* <!-- Label --> */}
								<label
									className="form-field__label"
									htmlFor="frmCranesJibMaxWeight"
								>
									JibMaxWeight
								</label>

								{/* <!-- Input --> */}
								<input
									className="form-field__input data__input_class"
									id="frmCranesJibMaxWeight"
									name="frmCranesJibMaxWeight"
									// placeholder="JibMaxWeight"
									type="text"
									onChange={this.handleChange}
								/>
							</div>

							<div className="form-field form-field--select col-sm-12 col-md-6">
								<label
									className="form-field__label"
									htmlFor="frmCranesJibArmRadius"
								>
									Jib Arm Radius
								</label>
								<div className="form-field__input">
									<select
										id="frmCranesJibArmRadius"
										className=""
										name="frmCranesJibArmRadius"
										// data-placeholder="e.g. Mrs"
										defaultValue=""
										onChange={this.handleChange}
									>
										<option value="" disabled hidden>
											Choose one
										</option>
										<option value="nikotrack">10</option>
										<option value="overhead-conveyors">12</option>
										<option value="workstation-cranes">15</option>
										<option value="workstation-cranes">20</option>
									</select>
									<svg className="input__select-icon">
										<use xlinkHref="#svg--arrow-dropdown" />
									</svg>
								</div>
							</div>

							<div className="form-field col-sm-12 col-md-6">
								{/* <!-- Label --> */}
								<label
									className="form-field__label"
									htmlFor="frmCranesJibHeightToBottomOfTrack"
								>
									JibHeightToBottomOfTrack
								</label>

								{/* <!-- Input --> */}
								<input
									className="form-field__input data__input_class"
									id="frmCranesJibHeightToBottomOfTrack"
									name="frmCranesJibHeightToBottomOfTrack"
									// placeholder="JibHeightToBottomOfTrack"
									type="text"
									onChange={this.handleChange}
								/>
							</div>
						</div>
					</fieldset>

					<fieldset>
						<legend>Fieldset Legend</legend>

						<div className="row">
							<div className="form-field form-field--textarea col-sm-12 col-md-8">
								<label
									className="form-field__label"
									htmlFor="frmCranesAdditionalDetails"
								>
									Additional Details
								</label>
								<textarea
									className="form-field__input"
									id="frmCranesAdditionalDetails"
									name="frmCranesAdditionalDetails"
									// placeholder="Lorem ipsum dolor sit."
									rows="6"
									onChange={this.handleChange}
								/>
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
										id="frmNikotrackConsent"
										name="frmNikotrackConsent"
										type="checkbox"
										onChange={this.handleChange}
										required
									/>
									<label
										className="form-field__label"
										htmlFor="frmNikotrackConsent"
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
								<label className="bot-field" htmlFor="bot-field3">
									Don&#39;t fill this out:{' '}
								</label>
								<input
									className="bot-field"
									name="bot-field3"
									id="bot-field3"
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

FormCranes.propTypes = {
	// services: PropTypes.arrayOf(PropTypes.shape({
	// 		title: PropTypes.string,
	// 		imageUrl: PropTypes.string,
	// 		imageAlt: PropTypes.string,
	// 		description: PropTypes.string,
	// 	})),
};

export default FormCranes;
