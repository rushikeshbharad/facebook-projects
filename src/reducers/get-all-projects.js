import { GET_PROJECT_SUCCESS } from '../assets/constants/action-types';

export const getAllProjects = (state = [], action) => {
	if (action['type'] === GET_PROJECT_SUCCESS) {
		return action['payload'];
	} else {
		return state;
	}
};
