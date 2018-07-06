// Library imports
import { fromJS, List, Map } from 'immutable';

// Action-types imports
import {
  GET_PROJECTS,
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_FAILURE,
  GET_CONTRIBUTORS_SUCCESS,
  GET_CONTRIBUTORS,
  GET_CONTRIBUTORS_FAILURE,
  GET_CONTRIBUTORS_CANCEL
} from '../assets/constants/action-types';

// Constants from API statuses
import {
  CANCELLED,
  CONTRIBUTORS,
  CONTRIBUTORS_STATUS,
  FAILURE,
  FETCHING,
  SUCCESS,
  NAME
} from '../assets/constants';

// Logger helper
import { logger } from './helper';

export const getProjectState = (state = List(), action = {}) => {
	if (action.type === GET_PROJECTS_SUCCESS) {
		return fromJS(action.payload);
	}

  if (action.type === GET_CONTRIBUTORS) {
    const { projectId } = action;
    let currentProject = state.get(projectId, Map());
    logger(`Started fetching contributors of ${currentProject.get(NAME)}`, FETCHING);
    currentProject = currentProject.set(CONTRIBUTORS_STATUS, FETCHING);
    return state.set(projectId, currentProject);
  }

  if (action.type === GET_CONTRIBUTORS_SUCCESS) {
    const { projectId, payload } = action;
		let currentProject = state.get(projectId);
    logger(`Have successfully fetched contributors of ${currentProject.get(NAME)}`, SUCCESS);
    currentProject = currentProject.set(CONTRIBUTORS, fromJS(payload)).set(CONTRIBUTORS_STATUS, SUCCESS);
    return state.set(projectId, currentProject);
  }

  if (action.type === GET_CONTRIBUTORS_FAILURE) {
    const { projectId } = action;
    let currentProject = state.get(projectId);
    logger(`Failed to fetch contributors of ${currentProject.get(NAME)}`, FAILURE);
    currentProject = currentProject.set(CONTRIBUTORS_STATUS, FAILURE);
    return state.set(projectId, currentProject);
  }

  if (action.type === GET_CONTRIBUTORS_CANCEL) {
    const { projectId } = action;
    let currentProject = state.get(projectId, Map());
    logger(`Cancelled fetching contributors of ${currentProject.get(NAME)}`, CANCELLED);
    currentProject = currentProject.set(CONTRIBUTORS_STATUS, CANCELLED);
    return state.set(projectId, currentProject);
  }

	return state;
};

export const getProjectsStatus = (state = '', action = {}) => {
	if (action.type === GET_PROJECTS) {
		logger('Started fetching all projects owned by Facebook', FETCHING);
		return FETCHING;
	}

	if (action.type === GET_PROJECTS_SUCCESS) {
		logger('All projects owned by Facebook are fetched successfully', SUCCESS);
		return SUCCESS;
	}

	if (action.type === GET_PROJECTS_FAILURE) {
		logger('Failed to fetch projects owned by Facebook', FAILURE);
		return FAILURE;
	}

	return state;
};
