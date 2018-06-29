import { combineReducers } from 'redux'
import { getAllProjects } from './get-all-projects'
import { getContributors } from './get-contributors';

// TODO: think over: should we use immutable.js?
// TODO: think over: if we can move hardcoded keys in redux store to constants (projects, contributors)
export default combineReducers({
	projects: getAllProjects,
	contributors: getContributors
});
