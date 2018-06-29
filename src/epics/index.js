import { GET_PROJECT } from '../assets/constants/action-types';
import { combineEpics, ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { mergeMap, map } from 'rxjs/operators';
import { getAllProjectSuccess } from '../actions';

const getAllProjects = action$ => action$.pipe(
	ofType(GET_PROJECT),
	mergeMap(page =>
		ajax.getJSON(`https://api.github.com/orgs/facebook/repos?per_page=100&page=${page}type=owner`).pipe(
			map(response => getAllProjectSuccess(response))
		)
	)
);

export default combineEpics(
	getAllProjects
);
