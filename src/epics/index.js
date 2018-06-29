import { combineEpics } from 'redux-observable';
import { getAllProjects } from './get-all-projects';

export default combineEpics(
	getAllProjects
);
