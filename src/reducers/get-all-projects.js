import { GET_PROJECTS_SUCCESS } from '../assets/constants/action-types';

export const getAllProjects = (state = [], action = {}) => {
	if (action.type === GET_PROJECTS_SUCCESS) {
		return action.payload;
	} else {
		return state;
	}
};
