import { combineReducers } from 'redux'
import { getAllProjects } from './get-all-projects'
import { getContributors } from './get-contributors';

export default combineReducers({
	projects: getAllProjects,
	contributors: getContributors
});
