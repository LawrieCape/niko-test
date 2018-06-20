import React from 'react';
// import PropTypes from 'prop-types';
import './ProductPdfs.scss';

const lfsldgjsldgkj = function ({ pdfs }) {
	if (!pdfs || !pdfs.length) {
		return (null);
	}
	return (
		<div className="product-content-group product-content-group--pdfs">
			{/* <h3>PDFs</h3> */}
			{pdfs && pdfs.map((pdf, index) => {
				return (
					<div key={index}>
						<a className="pdf__link" href={pdf.pdfUrl} target="_blank" rel="noopener noreferrer">
							<img className="pdf__image" src={pdf.pdfThumb} alt={pdf.title} width="200" height="200" />
							<p className="pdf__title">{pdf.title}</p>
						</a>
					</div>
				);
			})}
		</div>
	);
};

lfsldgjsldgkj.propTypes = {
	// services: PropTypes.arrayOf(PropTypes.shape({
	// 		title: PropTypes.string,
	// 		imageUrl: PropTypes.string,
	// 		imageAlt: PropTypes.string,
	// 		description: PropTypes.string,
	// 	})),
};

export default lfsldgjsldgkj;
