import React from 'react';
import PropTypes from 'prop-types';

export const HTMLContentComponent = function ({ content, className }) {
	return (
		<div className={className} dangerouslySetInnerHTML={{ __html: content }} />
	);
};

export const ContentComponent = function ({ content, className }) {
	return (
		<div className={className}>{content}</div>
	);
};

HTMLContentComponent.propTypes = {
	content: PropTypes.string,
	className: PropTypes.string,
};

ContentComponent.propTypes = {
	content: PropTypes.string,
	className: PropTypes.string,
};
