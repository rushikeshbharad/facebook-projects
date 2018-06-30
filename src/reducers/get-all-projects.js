import { fromJS } from 'immutable';
import { GET_PROJECTS_SUCCESS } from '../assets/constants/action-types';

export const getAllProjects = (state = [], action = {}) => {
	if (action.type === GET_PROJECTS_SUCCESS) {
		return fromJS(action.payload);
	} else {
		return fromJS(state);
	}
};
