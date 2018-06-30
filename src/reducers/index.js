import { combineReducers } from 'redux'
import { getAllProjects } from './get-all-projects'
import { getProjectsStatus } from './get-all-projects';
import { getContributors } from './get-contributors';
import { getContributorsStatus } from './get-contributors';

export default combineReducers({
	projects: getAllProjects,
	projectsStatus: getProjectsStatus,
	contributors: getContributors,
	contributorsStatus: getContributorsStatus
});
