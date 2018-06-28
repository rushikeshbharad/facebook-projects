import { GET_PROJECT_SUCCESS } from '../constants/action-types';
import { combineReducers } from 'redux'

const reducer = (state = {}, action) => {
  if (action['type'] === GET_PROJECT_SUCCESS) {
		return {
			...state,
			...{ currentRepo: action['payload'] }
		};
	} else {
		return state;
	}
};

export default combineReducers({ state: reducer });
