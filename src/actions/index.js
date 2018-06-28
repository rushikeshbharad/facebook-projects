import { GET_PROJECT_SUCCESS } from '../constants/action-types';

export const getAllProjects = () => dispatch => {
	fetch('https://api.github.com/users/facebook/repos')
		.then(r => r.json())
		.then(response => {
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
