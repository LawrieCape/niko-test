import React from 'react';
import PropTypes from 'prop-types';
import './CaseStudies.scss';

const CaseStudiesComponent = function ({ work }) {
	return (
		<div className="case-studies">
			{work.map((study, index) => {
				return (
					<article key={index} className="case-study">
						<h3>{study.title}</h3>
						<p>{study.description}</p>
						<p>{study.image}</p>
					</article>
				);
			})}
		</div>
	);
};

CaseStudiesComponent.propTypes = {
	work: PropTypes.arrayOf(PropTypes.shape({
			title: PropTypes.string,
			description: PropTypes.string,
			image: PropTypes.string,
		})),
};

export default CaseStudiesComponent;
