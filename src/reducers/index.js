import { GET_PROJECT_SUCCESS } from '../assets/constants/action-types';
import { combineReducers } from 'redux'

const projects = (state = [], action) => {
  if (action['type'] === GET_PROJECT_SUCCESS) {
		return [...state, ...action['payload']];
	} else {
		return state;
	}
};

const selectedProjectDetails = (state = {}, action) => {
	return state;
};

export default combineReducers({
	projects,
	selectedProjectDetails
});
