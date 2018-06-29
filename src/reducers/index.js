import { getAllProjects } from './get-all-projects'
import { getContributors } from './get-contributors';
import { combineReducers } from 'redux'

export default combineReducers({
	projects: getAllProjects,
	contributors: getContributors
});
