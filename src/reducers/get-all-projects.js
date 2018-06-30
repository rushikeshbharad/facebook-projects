import { fromJS } from 'immutable';
import { GET_PROJECTS, GET_PROJECTS_SUCCESS, GET_PROJECTS_FAILURE } from '../assets/constants/action-types';
import { FAILURE, FETCHING, SUCCESS } from '../assets/constants';

export const getAllProjects = (state = [], action = {}) => {
	if (action.type === GET_PROJECTS_SUCCESS) {
		return fromJS(action.payload);
	}

	return fromJS(state);
};

export const getProjectsStatus = (state = '', action = {}) => {
	if (action.type === GET_PROJECTS) {
		return FETCHING;
	}

	if (action.type === GET_PROJECTS_SUCCESS) {
		return SUCCESS;
	}

	if (action.type === GET_PROJECTS_FAILURE) {
		return FAILURE;
	}

	return state;
};
