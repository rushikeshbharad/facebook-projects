import { combineEpics } from 'redux-observable';
import { getAllProjects } from './get-all-projects';
import { getContributors } from './get-contributors';

export default combineEpics(
	getAllProjects,
	getContributors
);
