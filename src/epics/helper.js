export const getAllProjectPromise = (url, pages) => new Promise((resolve) => {
	const executeForSinglePage = (page, totalResponse) => {
		if (page > pages) {
			return resolve(totalResponse);
		}

		fetch(`${url}?per_page=100&page=${page}&type=owner`)
			.then(r => r.json(), () => resolve(totalResponse))
			.then((r = []) => {
				if (!r.length) {
					return resolve(totalResponse);
				}
				executeForSinglePage(page + 1, [...totalResponse, ...r]);
			}, () => {
				resolve(totalResponse);
			});
	};
	executeForSinglePage(1, []);
});
