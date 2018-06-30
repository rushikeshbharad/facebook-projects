import { fromJS } from 'immutable';
import { GET_PROJECTS, GET_PROJECTS_SUCCESS, GET_PROJECTS_FAILURE } from '../assets/constants/action-types';
import { FAILURE, FETCHING, SUCCESS } from '../assets/constants';
import { logger, LOGGER_TYPE } from './helper';

export const getAllProjects = (state = [], action = {}) => {
	if (action.type === GET_PROJECTS_SUCCESS) {
		return fromJS(action.payload);
	}

	return fromJS(state);
};

export const getProjectsStatus = (state = '', action = {}) => {
	if (action.type === GET_PROJECTS) {
		logger('Started fetching all projects owned by Facebook', LOGGER_TYPE.FETCHING);
		return FETCHING;
	}

	if (action.type === GET_PROJECTS_SUCCESS) {
		logger('All projects owned by Facebook are fetched successfully', LOGGER_TYPE.SUCCESS);
		return SUCCESS;
	}

	if (action.type === GET_PROJECTS_FAILURE) {
		logger('Failed to fetch projects owned by Facebook', LOGGER_TYPE.FAILURE);
		return FAILURE;
	}

	return state;
};
