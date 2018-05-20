import React from 'react';
// import PropTypes from 'prop-types';
// import './Services.scss';

const lfsldgjsldgkj = function ({ pdfs }) {
	return (
		<section className="product-content-group">
			{/* <h3>PDFs</h3> */}
			{pdfs && pdfs.map((pdf, index) => (
				<a key={index} className="pdf__link" href={pdf.pdfUrl} target="_blank" rel="noopener">
					<img className="pdf__image" src={pdf.pdfThumb} alt={pdf.title} width="200" height="200" />
					<p className="pdf__title">{pdf.title}</p>
				</a>
			))}
		</section>
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
