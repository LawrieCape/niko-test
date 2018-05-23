import React from 'react';
import PropTypes from 'prop-types';
import './Services.scss';

const ServicesComponent = function ({ services }) {
	console.log(services);

	return (
		<div className="messages">
			{services.map((service, index) => {
				return (
					<article key={index} className="message message-body">
						<h3>{service.title}</h3>
						<img src={service.imageUrl} alt={service.imageAlt} />
						<p>{service.description}</p>
					</article>
				);
			})}
		</div>
	);
};

ServicesComponent.propTypes = {
	services: PropTypes.arrayOf(PropTypes.shape({
			title: PropTypes.string,
			imageUrl: PropTypes.string,
			imageAlt: PropTypes.string,
			description: PropTypes.string,
		})),
};

export default ServicesComponent;
