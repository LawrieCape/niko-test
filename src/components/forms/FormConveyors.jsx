import React from 'react';
// import PropTypes from 'prop-types';

const FormNikotrack = function ({ enquiryType, isHidden }) {
	return (
		<form className="form enquiry-form" data-enquiry={enquiryType} aria-hidden={isHidden}>
			<div className="row">

				<div className="col-sm-12">
					<h2 className="h4">Overhead Conveyors</h2>
					<p>
						<strong>Welcome</strong><br />
						Thank you for visiting our website. If you have a particular application that you would like us to advise on and provide a quotation, then please use this form. You can also upload up to 2 files you consider helpful.
					</p>
				</div>

			</div>
			<div className="row">

				<fieldset>
					<legend>Fieldset Legend</legend>

					<div className="row">
						<div className="col-sm-12">
							<p>something</p>
						</div>
					</div>
				</fieldset>

				<fieldset>
					<legend>General Info</legend>

					<div className="row">
						<div className="form-field col-sm-6">
							{/* <!-- Label --> */}
							<label className="form-field__label" htmlFor="frmName">Name</label>

							{/* <!-- Input --> */}
							<input className="form-field__input data__input_class" id="frmName" name="frmName" placeholder="Name" type="text" />
						</div>
						<div className="form-field col-sm-6">
							{/* <!-- Label --> */}
							<label className="form-field__label" htmlFor="frmEmail">Email Address</label>

							{/* <!-- Input --> */}
							<input className="form-field__input data__input_class" id="frmEmail" name="frmEmail" placeholder="Email Address" type="text" />
						</div>

						<div className="form-field col-sm-6">
							{/* <!-- Label --> */}
							<label className="form-field__label" htmlFor="frmPhoneNumber">Phone Number</label>

							{/* <!-- Input --> */}
							<input className="form-field__input data__input_class" id="frmPhoneNumber" name="frmPhoneNumber" placeholder="Phone Number" type="text" />
						</div>

						<div className="form-field col-sm-6">
							{/* <!-- Label --> */}
							<label className="form-field__label" htmlFor="frmCompany">Company</label>

							{/* <!-- Input --> */}
							<input className="form-field__input data__input_class" id="frmCompany" name="frmCompany" placeholder="Company" type="text" />
						</div>
					</div>
				</fieldset>

				<fieldset>
					<legend>Conveyor Details</legend>

					<div className="row">
						<div className="form-field form-field--textarea col-sm-12 col-md-8">
							<label className="form-field__label" htmlFor="data__data_id09">data_label</label>
							<textarea className="form-field__input" id="data__data_id09" name="data__data_id09" placeholder="Lorem ipsum dolor sit." rows="6" />
						</div>
					</div>
				</fieldset>

				<fieldset>
					<legend>Most Common Part Dimensions</legend>

					<div className="row">
						<div className="form-field col-sm-12 col-md-6 col-lg-4">
							{/* <!-- Label --> */}
							<label className="form-field__label" htmlFor="frmMostCommonPartLength">MostCommonPartLength</label>

							{/* <!-- Input --> */}
							<input className="form-field__input data__input_class" id="frmMostCommonPartLength" name="frmMostCommonPartLength" placeholder="MostCommonPartLength" type="text" />
						</div>
						<div className="form-field col-sm-12 col-md-6 col-lg-4">
							{/* <!-- Label --> */}
							<label className="form-field__label" htmlFor="frmMostCommonPartHeight">MostCommonPartHeight</label>

							{/* <!-- Input --> */}
							<input className="form-field__input data__input_class" id="frmMostCommonPartHeight" name="frmMostCommonPartHeight" placeholder="MostCommonPartHeight" type="text" />
						</div>
						<div className="form-field col-sm-12 col-md-6 col-lg-4">
							{/* <!-- Label --> */}
							<label className="form-field__label" htmlFor="frmMostCommonPartWidth">MostCommonPartWidth</label>

							{/* <!-- Input --> */}
							<input className="form-field__input data__input_class" id="frmMostCommonPartWidth" name="frmMostCommonPartWidth" placeholder="MostCommonPartWidth" type="text" />
						</div>
						<div className="form-field col-sm-12 col-md-6 col-lg-4">
							{/* <!-- Label --> */}
							<label className="form-field__label" htmlFor="frmMostCommonPartWeight">MostCommonPartWeight</label>

							{/* <!-- Input --> */}
							<input className="form-field__input data__input_class" id="frmMostCommonPartWeight" name="frmMostCommonPartWeight" placeholder="MostCommonPartWeight" type="text" />
						</div>
					</div>
				</fieldset>

				<fieldset>
					<legend>Largest Part Dimensions</legend>

					<div className="row">
						<div className="form-field col-sm-12 col-md-6 col-lg-4">
							{/* <!-- Label --> */}
							<label className="form-field__label" htmlFor="frmLargestPartLength">LargestPartLength</label>

							{/* <!-- Input --> */}
							<input className="form-field__input data__input_class" id="frmLargestPartLength" name="frmLargestPartLength" placeholder="LargestPartLength" type="text" />
						</div>
						<div className="form-field col-sm-12 col-md-6 col-lg-4">
							{/* <!-- Label --> */}
							<label className="form-field__label" htmlFor="frmLargestPartHeight">LargestPartHeight</label>

							{/* <!-- Input --> */}
							<input className="form-field__input data__input_class" id="frmLargestPartHeight" name="frmLargestPartHeight" placeholder="LargestPartHeight" type="text" />
						</div>
						<div className="form-field col-sm-12 col-md-6 col-lg-4">
							{/* <!-- Label --> */}
							<label className="form-field__label" htmlFor="frmLargestPartWidth">LargestPartWidth</label>

							{/* <!-- Input --> */}
							<input className="form-field__input data__input_class" id="frmLargestPartWidth" name="frmLargestPartWidth" placeholder="LargestPartWidth" type="text" />
						</div>
						<div className="form-field col-sm-12 col-md-6 col-lg-4">
							{/* <!-- Label --> */}
							<label className="form-field__label" htmlFor="frmLargestPartWeight">LargestPartWeight</label>

							{/* <!-- Input --> */}
							<input className="form-field__input data__input_class" id="frmLargestPartWeight" name="frmLargestPartWeight" placeholder="LargestPartWeight" type="text" />
						</div>
					</div>
				</fieldset>

				<fieldset>
					<legend>Additional Information</legend>

					<div className="row">
						<div className="form-field col-sm-12 col-md-6 col-lg-4">
							{/* <!-- Label --> */}
							<label className="form-field__label" htmlFor="frmMaxNumberOfParts">MaxNumberOfParts</label>

							{/* <!-- Input --> */}
							<input className="form-field__input data__input_class" id="frmMaxNumberOfParts" name="frmMaxNumberOfParts" placeholder="MaxNumberOfParts" type="text" />
						</div>
						<div className="form-field col-sm-12 col-md-6 col-lg-4">
							{/* <!-- Label --> */}
							<label className="form-field__label" htmlFor="frmMostCommonPart">MostCommonPart</label>

							{/* <!-- Input --> */}
							<input className="form-field__input data__input_class" id="frmMostCommonPart" name="frmMostCommonPart" placeholder="MostCommonPart" type="text" />
						</div>
						<div className="form-field col-sm-12 col-md-6 col-lg-4">
							{/* <!-- Label --> */}
							<label className="form-field__label" htmlFor="frmLargestPart">LargestPart</label>

							{/* <!-- Input --> */}
							<input className="form-field__input data__input_class" id="frmLargestPart" name="frmLargestPart" placeholder="LargestPart" type="text" />
						</div>
						<div className="form-field col-sm-12 col-md-6 col-lg-4">
							{/* <!-- Label --> */}
							<label className="form-field__label" htmlFor="frmLineSpeed">LineSpeed</label>

							{/* <!-- Input --> */}
							<input className="form-field__input data__input_class" id="frmLineSpeed" name="frmLineSpeed" placeholder="LineSpeed" type="text" />
						</div>
						<div className="form-field col-sm-12 col-md-6 col-lg-4">
							{/* <!-- Label --> */}
							<label className="form-field__label" htmlFor="frmMaxOvenTemp">MaxOvenTemp</label>

							{/* <!-- Input --> */}
							<input className="form-field__input data__input_class" id="frmMaxOvenTemp" name="frmMaxOvenTemp" placeholder="MaxOvenTemp" type="text" />
						</div>
						<div className="form-field col-sm-12 col-md-6 col-lg-4">
							{/* <!-- Label --> */}
							<label className="form-field__label" htmlFor="frmDropLiftsRequired">DropLiftsRequired</label>

							{/* <!-- Input --> */}
							<input className="form-field__input data__input_class" id="frmDropLiftsRequired" name="frmDropLiftsRequired" placeholder="DropLiftsRequired" type="text" />
						</div>
					</div>
				</fieldset>

				<fieldset>
					<legend>Descrition of Project</legend>

					<div className="row">
						<div className="form-field form-field--textarea col-sm-12 col-md-8">
							<label className="form-field__label" htmlFor="data__data_id09">Please supply a description of your finishing process</label>
							<textarea className="form-field__input" id="data__data_id09" name="data__data_id09" placeholder="Lorem ipsum dolor sit." rows="6" />
						</div>

						<div className="form-field form-field--file col-sm-12 col-md-8">
							<label className="form-field__label" htmlFor="file-1"><span>Upload file</span></label>
							<input type="file" name="file-1[]" id="file-1" className="inputfile" />
							<p>If you have a file for your project please upload it here. Accepted file types: pdf, jpeg, dwg, step</p>
						</div>
					</div>
				</fieldset>

				<fieldset>
					<legend>Verify &amp; Submit</legend>

					<div className="row">
						<div className="form-field col-sm-12">
							GOOGLE VERIFY
							<div data-netlify-recaptcha />
						</div>

						<div className="form-field col-sm-12">
							<button className="">Submit</button>
						</div>
					</div>
				</fieldset>


			</div>

		</form>
	);
};

FormNikotrack.propTypes = {
	// services: PropTypes.arrayOf(PropTypes.shape({
	// 		title: PropTypes.string,
	// 		imageUrl: PropTypes.string,
	// 		imageAlt: PropTypes.string,
	// 		description: PropTypes.string,
	// 	})),
};

export default FormNikotrack;
