import React from 'react';
import PropTypes from 'prop-types';

export const HTMLContent = function ({ content, className }) {
	return (
		<div
			className={className}
			dangerouslySetInnerHTML={{ __html: content }}
		/>
	);
};

const Content = function ({ content, className }) {
	return <div className={className}>{content}</div>;
};

Content.propTypes = {
	content: PropTypes.string,
	className: PropTypes.string,
};

HTMLContent.propTypes = Content.propTypes;

export default Content;
