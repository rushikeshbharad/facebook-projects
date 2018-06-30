import { fromJS, List } from 'immutable';
import { GET_CONTRIBUTORS_CANCEL, GET_CONTRIBUTORS_SUCCESS } from '../assets/constants/action-types';

export const getContributors = (state = [], action = {}) => {
	if (action.type === GET_CONTRIBUTORS_SUCCESS) {
		return fromJS(action.payload);
	} else if (action.type === GET_CONTRIBUTORS_CANCEL) {
		return List();
	} else {
		return fromJS(state);
	}
};
