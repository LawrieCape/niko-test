export const encodeFormData = function (data) {
	const formData = new FormData();

	for (const key of Object.keys(data)) {
		formData.append(key, data[key]);
	}

	return formData;
};
