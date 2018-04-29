import React from 'react';
import PropTypes from 'prop-types';
import './Jobs.scss';

const JobsComponent = function({ jobs, careersEmail, recruitersEmail }) {
	return (
		<div className="jobs">
			{jobs.map((job, index) => (
				<article key={index} className="job">
					<h3>{job.title}</h3>
					<p>{job.description}</p>
					<p>
						Email your CV to {careersEmail}. Recruiters contact{' '}
						{recruitersEmail}.
					</p>
				</article>
			))}
		</div>
	);
};

JobsComponent.propTypes = {
	jobs: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string,
			description: PropTypes.string,
		})
	),
	careersEmail: PropTypes.string,
	recruitersEmail: PropTypes.string,
};

export default JobsComponent;
