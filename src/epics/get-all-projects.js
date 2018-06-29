import { GET_PROJECT } from '../assets/constants/action-types';
import { ofType } from 'redux-observable';
import { from } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';
import { getAllProjectsSuccess } from '../actions';
import { getAllProjectPromise } from './helper';
import { FB_PROJECT_FETCH_URL, MAX_PAGES_FOR_FB_PROJECTS_API } from '../assets/constants'

export const getAllProjects = action$ => action$.pipe(
	ofType(GET_PROJECT),
	map(({ payload }) => payload),
	mergeMap(() =>
		from(getAllProjectPromise(FB_PROJECT_FETCH_URL, MAX_PAGES_FOR_FB_PROJECTS_API)).pipe(
			map(data => getAllProjectsSuccess(data))
		)
	)
);
