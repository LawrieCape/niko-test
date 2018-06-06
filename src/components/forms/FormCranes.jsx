import React from 'react';
// import PropTypes from 'prop-types';

const FormNikotrack = function ({ enquiryType, isHidden }) {
	return (
		<form className="form enquiry-form" data-enquiry={enquiryType} aria-hidden={isHidden}>
			<div className="row">

				<div className="col-sm-12">
					<h2 className="h4">Workstation Cranes</h2>
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
						<div className="form-field col-sm-12 col-md-6">
							{/* <!-- Label --> */}
							<label className="form-field__label" htmlFor="frmName">Name</label>

							{/* <!-- Input --> */}
							<input className="form-field__input data__input_class" id="frmName" name="frmName" placeholder="Name" type="text" />
						</div>
						<div className="form-field col-sm-12 col-md-6">
							{/* <!-- Label --> */}
							<label className="form-field__label" htmlFor="frmEmail">Email Address</label>

							{/* <!-- Input --> */}
							<input className="form-field__input data__input_class" id="frmEmail" name="frmEmail" placeholder="Email Address" type="text" />
						</div>

						<div className="form-field col-sm-12 col-md-6">
							{/* <!-- Label --> */}
							<label className="form-field__label" htmlFor="frmPhoneNumber">Phone Number</label>

							{/* <!-- Input --> */}
							<input className="form-field__input data__input_class" id="frmPhoneNumber" name="frmPhoneNumber" placeholder="Phone Number" type="text" />
						</div>

						<div className="form-field col-sm-12 col-md-6">
							{/* <!-- Label --> */}
							<label className="form-field__label" htmlFor="frmCompany">Company</label>

							{/* <!-- Input --> */}
							<input className="form-field__input data__input_class" id="frmCompany" name="frmCompany" placeholder="Company" type="text" />
						</div>
					</div>
				</fieldset>

				<fieldset>
					<legend>Fieldset Legend</legend>

					<div className="row">
						<div className="form-field col-sm-12 col-md-4">
							{/* <!-- Label --> */}
							<label className="form-field__label" htmlFor="frmWorkstationMaxWeight">WorkstationMaxWeight</label>

							{/* <!-- Input --> */}
							<input className="form-field__input data__input_class" id="frmWorkstationMaxWeight" name="frmWorkstationMaxWeight" placeholder="WorkstationMaxWeight" type="text" />
						</div>

						<div className="form-field col-sm-12 col-md-4">
							{/* <!-- Label --> */}
							<label className="form-field__label" htmlFor="frmBridgeLength">BridgeLength</label>

							{/* <!-- Input --> */}
							<input className="form-field__input data__input_class" id="frmBridgeLength" name="frmBridgeLength" placeholder="BridgeLength" type="text" />
						</div>

						<div className="form-field col-sm-12 col-md-4">
							{/* <!-- Label --> */}
							<label className="form-field__label" htmlFor="frmRunwayLength">RunwayLength</label>

							{/* <!-- Input --> */}
							<input className="form-field__input data__input_class" id="frmRunwayLength" name="frmRunwayLength" placeholder="RunwayLength" type="text" />
						</div>

						<div className="form-field form-field--select col-sm-12 col-md-4">
							<label className="form-field__label" htmlFor="frmFestooning">Festooning</label>
							<div className="form-field__input">
								<select id="frmFestooning" className="" name="frmFestooning" data-placeholder="e.g. Mrs" onChange={this.selectForm}>
									<option value="" disabled hidden selected>Choose one</option>
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
							<label className="form-field__label" htmlFor="frmHeightToBottomOfTrack">HeightToBottomOfTrack</label>

							{/* <!-- Input --> */}
							<input className="form-field__input data__input_class" id="frmHeightToBottomOfTrack" name="frmHeightToBottomOfTrack" placeholder="HeightToBottomOfTrack" type="text" />
						</div>

						<div className="form-field col-sm-12 col-md-4">
							{/* <!-- Label --> */}
							<label className="form-field__label" htmlFor="frmFloorOrCeilingMounted">FloorOrCeilingMounted</label>

							{/* <!-- Input --> */}
							<input className="form-field__input data__input_class" id="frmFloorOrCeilingMounted" name="frmFloorOrCeilingMounted" placeholder="FloorOrCeilingMounted" type="text" />
						</div>
					</div>
				</fieldset>

				<fieldset>
					<legend>Fieldset Legend</legend>

					<div className="row">
						<div className="form-field col-sm-12 col-md-6">
							{/* <!-- Label --> */}
							<label className="form-field__label" htmlFor="frmWallFloorColumnMounted">WallFloorColumnMounted</label>

							{/* <!-- Input --> */}
							<input className="form-field__input data__input_class" id="frmWallFloorColumnMounted" name="frmWallFloorColumnMounted" placeholder="WallFloorColumnMounted" type="text" />
						</div>

						<div className="form-field col-sm-12 col-md-6">
							{/* <!-- Label --> */}
							<label className="form-field__label" htmlFor="frmJibMaxWeight">JibMaxWeight</label>

							{/* <!-- Input --> */}
							<input className="form-field__input data__input_class" id="frmJibMaxWeight" name="frmJibMaxWeight" placeholder="JibMaxWeight" type="text" />
						</div>

						<div className="form-field form-field--select col-sm-12 col-md-6">
							<label className="form-field__label" htmlFor="frmJibArmRadius">Jib Arm Radius</label>
							<div className="form-field__input">
								<select id="frmJibArmRadius" className="" name="frmJibArmRadius" data-placeholder="e.g. Mrs" onChange={this.selectForm}>
									<option value="" disabled hidden selected>Choose one</option>
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
							<label className="form-field__label" htmlFor="frmJibHeightToBottomOfTrack">JibHeightToBottomOfTrack</label>

							{/* <!-- Input --> */}
							<input className="form-field__input data__input_class" id="frmJibHeightToBottomOfTrack" name="frmJibHeightToBottomOfTrack" placeholder="JibHeightToBottomOfTrack" type="text" />
						</div>
					</div>
				</fieldset>

				<fieldset>
					<legend>Fieldset Legend</legend>

					<div className="row">
						<div className="form-field form-field--textarea col-sm-12 col-md-8">
							<label className="form-field__label" htmlFor="data__data_id09">Additional Details</label>
							<textarea className="form-field__input" id="data__data_id09" name="data__data_id09" placeholder="Lorem ipsum dolor sit." rows="6" />
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
