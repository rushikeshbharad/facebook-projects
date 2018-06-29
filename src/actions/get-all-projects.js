import { GET_PROJECT_SUCCESS, GET_PROJECT } from '../assets/constants/action-types';

export const getAllProjects = payload => {
	return {
		type: GET_PROJECT,
		payload
	};
};

export const getAllProjectsSuccess = response => {
	const payload = response.sort((p1, p2) => {
		if (p1.watchers < p2.watchers) {
			return 1;
		}
		if (p1.watchers > p2.watchers) {
			return -1;
		}
		return 0;
	});

	return {
		type: GET_PROJECT_SUCCESS,
		payload
	};
};
