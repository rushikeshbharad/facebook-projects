import { MAX_ENTRIES_PER_PAGE } from '../assets/constants';

// getAllPagesPromise accepts Github api URL and number of pages needs to be fetched
// and returns a promise with array of response
// Need: Github api fetches maximum 100 entries at single API hit
export const getAllPagesPromise = (url, pages) => new Promise((resolve, reject) => {
	const executeForSinglePage = (page, totalResponse) => {
		if (page > pages) {
			// Resolve total response if current page has exceeded
			// the total number of max pages
			return resolve(totalResponse);
		}

		// Added parameters to URL for 100 entries per page, index of page and member type
		fetch(`${url}?per_page=${MAX_ENTRIES_PER_PAGE}&page=${page}&type=owner`)
			.then(r => {
				if (r.ok) {
					return r.json()
				}

				reject(r.url);
			}, () => {
				reject(url);
			})
			.then((r = []) => {
				if (r.length < MAX_ENTRIES_PER_PAGE) {
					// Resolve total response with new entries
					// if number of entries found to be less than max per page
					return resolve([...totalResponse, ...r]);
				}
				// Add up the response and start fetching next page
				executeForSinglePage(page + 1, [...totalResponse, ...r]);
			});
	};

	// Start fetching data from page number 1
	executeForSinglePage(1, []);
});
