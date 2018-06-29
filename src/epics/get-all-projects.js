// Library imports
import { from } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';
import { ofType } from 'redux-observable';

// Constants import
import { GET_PROJECTS } from '../assets/constants/action-types';
import { FB_PROJECT_FETCH_URL, MAX_PAGES_FOR_FB_PROJECTS_API } from '../assets/constants'

// Actions import
import { getAllProjectsSuccess } from '../actions';

// Helper function imports
import { getAllProjectPromise } from './helper';

export const getAllProjects = action$ => action$.pipe(
	ofType(GET_PROJECTS),
	mergeMap(() =>
		from(getAllProjectPromise(FB_PROJECT_FETCH_URL, MAX_PAGES_FOR_FB_PROJECTS_API)).pipe(
			map(data => getAllProjectsSuccess(data))
		)
	)
);
