import React from 'react';
// import PropTypes from 'prop-types';
import { navigateTo } from "gatsby-link";
import Recaptcha from "react-google-recaptcha";

// const RECAPTCHA_KEY = process.env.SITE_RECAPTCHA_KEY;
const RECAPTCHA_KEY = '6Ldp010UAAAAAAEJX8fybVEqCtq0LnoUj6cSM7MP';

function encode(data) {
	return Object.keys(data)
		.map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
		.join("&");
}

class FormNikotrack extends React.Component {
	constructor(props) {
		console.log('constructor');
		super(props);
		this.state = {};
	}

	handleChange = e => {
		console.log('handleChange');
		this.setState({ [e.target.name]: e.target.value });
	}

	handleRecaptcha = value => {
		console.log('handleRecaptcha');
		this.setState({ "g-recaptcha-response": value });
	}

	handleSubmit = e => {
		console.log('handleSubmit2');
		e.preventDefault();
		const form = e.target;
		const test = {...this.state};
		console.log(test);
		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: encode({
				"form-name": form.getAttribute("name"),
				...this.state
			})
		})
			.then(function(response) {
				console.log(response);
			})
			.then(function(myJson) {
				console.log(myJson);
			})
			.then(() => navigateTo(form.getAttribute("action")))
			.catch(error => alert(error));
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
				data-netlify-honeypot="bot-field"
				data-netlify-recaptcha="true"
				onSubmit={this.handleSubmit}
			>
				<input type="hidden" name="form-name" value="contactNikotrack" />

				<div className="row">

					<div className="col-sm-12">
						<h2 className="h4">Nikotrack</h2>
						<p>
							<strong>Welcome</strong><br />
							Thank you for visiting our website. If you have a particular application that you would like us to advise on and provide a quotation, then please use this form. You can also upload up to 2 files you consider helpful.
						</p>
					</div>

				</div>
				<div className="row">

					<fieldset>
						<legend>General Info</legend>

						<div className="row">
							<div className="form-field col-sm-6">
								{/* <!-- Label --> */}
								<label className="form-field__label" htmlFor="frmName">Name</label>

								{/* <!-- Input --> */}
								<input className="form-field__input data__input_class" id="frmName" name="frmName" placeholder="Name" type="text" onChange={this.handleChange} />
							</div>
							<div className="form-field col-sm-6">
								{/* <!-- Label --> */}
								<label className="form-field__label" htmlFor="frmEmail">Email Address</label>

								{/* <!-- Input --> */}
								<input className="form-field__input data__input_class" id="frmEmail" name="frmEmail" placeholder="Email Address" type="text" onChange={this.handleChange} />
							</div>

							<div className="form-field col-sm-6">
								{/* <!-- Label --> */}
								<label className="form-field__label" htmlFor="frmPhoneNumber">Phone Number</label>

								{/* <!-- Input --> */}
								<input className="form-field__input data__input_class" id="frmPhoneNumber" name="frmPhoneNumber" placeholder="Phone Number" type="text" onChange={this.handleChange} />
							</div>

							<div className="form-field col-sm-6">
								{/* <!-- Label --> */}
								<label className="form-field__label" htmlFor="frmCompany">Company</label>

								{/* <!-- Input --> */}
								<input className="form-field__input data__input_class" id="frmCompany" name="frmCompany" placeholder="Company" type="text" onChange={this.handleChange} />
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
										<input className="form-field__input" id="frmInterestedInConveyors" name="frmInterestedInConveyors" type="checkbox" onChange={this.handleChange} />
										<label className="form-field__label" htmlFor="frmInterestedInConveyors">Overhead Conveyors</label>
									</div>
									<div className="form-field form-field--checkbox">
										<input className="form-field__input" id="frmInterestedInSlidingDoors" name="frmInterestedInSlidingDoors" type="checkbox" onChange={this.handleChange} />
										<label className="form-field__label" htmlFor="frmInterestedInSlidingDoors">Industrial Sliding Doors</label>
									</div>
									<div className="form-field form-field--checkbox">
										<input className="form-field__input" id="frmInterestedInFallArrestProtection" name="frmInterestedInFallArrestProtection" type="checkbox" onChange={this.handleChange} />
										<label className="form-field__label" htmlFor="frmInterestedInFallArrestProtection">Fall Arrest Protection</label>
									</div>
									<div className="form-field form-field--checkbox">
										<input className="form-field__input" id="frmInterestedInCranes" name="frmInterestedInCranes" type="checkbox" onChange={this.handleChange} />
										<label className="form-field__label" htmlFor="frmInterestedInCranes">Workstation Cranes</label>
									</div>
								</div>
							</div>

							<div className="form-field form-field--textarea col-sm-12 col-md-8">
								<label className="form-field__label" htmlFor="frmGeneralDetails">Please give as many details as you can about your enquiry:</label>
								<textarea className="form-field__input" id="frmGeneralDetails" name="frmGeneralDetails" placeholder="Lorem ipsum dolor sit." rows="6" onChange={this.handleChange} />
							</div>

							<div className="form-field form-field--file col-sm-6">
								<label className="form-field__label" htmlFor="frmProjectFile1"><span>Upload 1st Project File</span></label>
								<input type="file" name="frmProjectFile1" id="frmProjectFile1" className="form-field__input" onChange={this.handleChange} />
								<p className="small">If you have a file for your project please upload it here. Accepted file types: pdf, jpeg, png, gif</p>
							</div>

							<div className="form-field form-field--file col-sm-6">
								<label className="form-field__label" htmlFor="frmProjectFile2"><span>Upload 2nd Project File</span></label>
								<input type="file" name="frmProjectFile2" id="frmProjectFile2" className="form-field__input" onChange={this.handleChange} />
								<p className="small">If you have a second file for your project please upload it here. Accepted file types: pdf, jpeg, png, gif</p>
							</div>
						</div>
					</fieldset>

					<fieldset>
						<legend>Verify &amp; Submit</legend>

						<div className="row">
							<div className="form-field col-sm-12">
								<label>Don't fill this out: <input name="bot-field" /></label>
								<Recaptcha
									// ref="recaptcha"
									sitekey={RECAPTCHA_KEY}
									onChange={this.handleRecaptcha}
								/>
							</div>

							<div className="form-field col-sm-12">
								<button className="" type="submit">Submit</button>
							</div>
						</div>
					</fieldset>

				</div>
			</form>
		);
	}
}

FormNikotrack.propTypes = {
	// services: PropTypes.arrayOf(PropTypes.shape({
	// 		title: PropTypes.string,
	// 		imageUrl: PropTypes.string,
	// 		imageAlt: PropTypes.string,
	// 		description: PropTypes.string,
	// 	})),
};

export default FormNikotrack;
