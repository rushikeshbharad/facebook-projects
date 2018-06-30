import { fromJS, List } from 'immutable';
import {
	GET_CONTRIBUTORS,
	GET_CONTRIBUTORS_CANCEL,
	GET_CONTRIBUTORS_FAILURE,
	GET_CONTRIBUTORS_SUCCESS
} from '../assets/constants/action-types';
import { CANCELLED, FAILURE, FETCHING, SUCCESS } from '../assets/constants';
import { logger, LOGGER_TYPE } from './helper';

export const getContributors = (state = List(), action = {}) => {
	if (action.type === GET_CONTRIBUTORS_SUCCESS) {
		return fromJS(action.payload);
	}

	if (action.type === GET_CONTRIBUTORS_FAILURE) {
		return List();
	}

	if (action.type === GET_CONTRIBUTORS_CANCEL) {
		return List();
	}

	return state;
};

export const getContributorsStatus = (state = '', action = {}) => {
	if (action.type === GET_CONTRIBUTORS) {
		logger('Started fetching contributors', LOGGER_TYPE.FETCHING);
		return FETCHING;
	}

	if (action.type === GET_CONTRIBUTORS_SUCCESS) {
		logger('Contributors are fetched successfully', LOGGER_TYPE.SUCCESS);
		return SUCCESS;
	}

	if (action.type === GET_CONTRIBUTORS_FAILURE) {
		logger('Failed to fetch contributors', LOGGER_TYPE.FAILURE);
		return FAILURE;
	}

	if (action.type === GET_CONTRIBUTORS_CANCEL) {
		logger('Cancelled ongoing fetch contributor API', LOGGER_TYPE.CANCELLED);
		return CANCELLED;
	}

	return state;
};
