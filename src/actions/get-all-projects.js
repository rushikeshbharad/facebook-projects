import { GET_PROJECTS_SUCCESS, GET_PROJECTS } from '../assets/constants/action-types';

export const getAllProjects = payload => ({
	type: GET_PROJECTS,
	payload
});

export const getAllProjectsSuccess = (response = []) => {
	// Projects are being received in response
	// Below code sorts the projects by the number of watchers
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
		type: GET_PROJECTS_SUCCESS,
		payload
	};
};
