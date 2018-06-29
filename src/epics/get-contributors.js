import { GET_CONTRIBUTORS } from '../assets/constants/action-types';
import { ofType } from 'redux-observable';
import { from } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';
import { getContributorsSuccess } from '../actions';
import { getAllProjectPromise } from './helper';
import { MAX_PAGES_FOR_FB_PROJECTS_API } from '../assets/constants'

export const getContributors = action$ => action$.pipe(
	ofType(GET_CONTRIBUTORS),
	map(({ payload }) => payload),
	mergeMap(url =>
		from(getAllProjectPromise(url, MAX_PAGES_FOR_FB_PROJECTS_API)).pipe(
			map(data => getContributorsSuccess(data))
		)
	)
);
