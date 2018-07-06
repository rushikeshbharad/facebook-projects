import { combineReducers } from 'redux'
import { getProjectState } from './get-all-projects'
import { getProjectsStatus } from './get-all-projects';

export default combineReducers({
	projects: getProjectState,
	projectsStatus: getProjectsStatus
});
