import React from 'react';
import { ServicePageTemplate } from '../../templates/service-page';

const ServicePagePreview = ({ entry, getAsset }) => {
	const entryServices = entry.getIn(['data', 'services']);
	const services = entryServices ? entryServices.toJS() : [];

	console.log('services: ', services);

	return (
		<ServicePageTemplate
			title={entry.getIn(['data', 'title'])}
			heading={entry.getIn(['data', 'heading'])}
			description={entry.getIn(['data', 'description'])}
			services={services}
		/>
	);
};

export default ServicePagePreview;
