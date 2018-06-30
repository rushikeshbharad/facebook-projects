import { fromJS, List } from 'immutable';
import {
	GET_CONTRIBUTORS,
	GET_CONTRIBUTORS_CANCEL,
	GET_CONTRIBUTORS_FAILURE,
	GET_CONTRIBUTORS_SUCCESS
} from '../assets/constants/action-types';
import { CANCELLED, FAILURE, FETCHING, SUCCESS } from '../assets/constants';

export const getContributors = (state = [], action = {}) => {
	if (action.type === GET_CONTRIBUTORS_SUCCESS) {
		return fromJS(action.payload);
	} else if (action.type === GET_CONTRIBUTORS_FAILURE) {
		return List();
	} else if (action.type === GET_CONTRIBUTORS_CANCEL) {
		return List();
	}

	return fromJS(state);
};

export const getContributorsStatus = (state = [], action = {}) => {
	if (action.type === GET_CONTRIBUTORS) {
		return FETCHING;
	} else if (action.type === GET_CONTRIBUTORS_SUCCESS) {
		return SUCCESS;
	} else if (action.type === GET_CONTRIBUTORS_FAILURE) {
		return FAILURE;
	} else if (action.type === GET_CONTRIBUTORS_CANCEL) {
		return CANCELLED;
	}

	return state;
};
