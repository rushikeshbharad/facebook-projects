import { GET_PROJECT_SUCCESS, GET_CONTRIBUTORS_SUCCESS } from '../assets/constants/action-types';

export const getAllProjects = () => dispatch => {
	fetch('https://api.github.com/orgs/facebook/repos?per_page=200&type=owner')
		.then(r => r.json())
		.then(response => {
			// Here payload is list of projects sorted by number of watchers
			const payload = response.sort((p1, p2) => {
				if (p1.watchers < p2.watchers) {
					return 1;
				}
				if (p1.watchers > p2.watchers) {
					return -1;
				}
				return 0;
			});
			dispatch({
				type: GET_PROJECT_SUCCESS,
				payload
			});
	  });
};

export const getContributors = url => dispatch => {
	fetch(url).then(r => r.json()).then(response => {
		// Here payload is list of contributors
		const payload = response.map(r => ({ name: r.commit.author.name, avatarURL: r.author.avatar_url }));
		dispatch({
			type: GET_CONTRIBUTORS_SUCCESS,
			payload
		});
	});
};
