import { GET_CONTRIBUTORS_CANCEL, GET_CONTRIBUTORS_SUCCESS } from '../assets/constants/action-types';

export const getContributors = (state = [], action = {}) => {
	if (action.type === GET_CONTRIBUTORS_SUCCESS) {
		return action.payload;
	} else if (action.type === GET_CONTRIBUTORS_CANCEL) {
		return [];
	} else {
		return state;
	}
};
