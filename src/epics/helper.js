export const getAllProjectPromise = (url, pages) => new Promise((resolve, reject) => {
	const executeForSinglePage = (page, totalResponse) => {
		if (page > pages) {
			// Resolve total response if current page has exceeded
			// the total number of max pages
			return resolve(totalResponse);
		}

		// Added parameters to URL for 100 entries per page, index of page and member type
		fetch(`${url}?per_page=100&page=${page}&type=owner`)
			.then(r => {
				if (r.ok) {
					return r.json()
				}

				reject(r.url);
			})
			.then((r = []) => {
				if (!r.length) {
					// Resolve total response if empty data has started coming
					return resolve(totalResponse);
				}
				executeForSinglePage(page + 1, [...totalResponse, ...r]);
			});
	};

	// Start fetching data from page number 1
	executeForSinglePage(1, []);
});
