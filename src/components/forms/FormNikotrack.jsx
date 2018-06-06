import React from 'react';
// import PropTypes from 'prop-types';

const FormNikotrack = function ({ enquiryType, isHidden }) {
	return (
		<form className="form enquiry-form" data-enquiry={enquiryType} aria-hidden={isHidden}>
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
					<legend>Product Info</legend>

					<div className="row">
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

						<div className="form-field form-field--textarea col-sm-12 col-md-8">
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
					</div>
				</fieldset>

				<fieldset>
					<legend>Fieldset Legend</legend>

					<div className="row">
						<div className="form-field col-sm-12">
							GOOGLE VERIFY
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
