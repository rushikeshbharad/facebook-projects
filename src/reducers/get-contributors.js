import { GET_CONTRIBUTORS_SUCCESS } from '../assets/constants/action-types';

export const getContributors = (state = [], action = {}) => {
	if (action.type === GET_CONTRIBUTORS_SUCCESS) {
		return action.payload;
	} else {
		return state;
	}
};
