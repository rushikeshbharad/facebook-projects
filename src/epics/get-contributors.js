// Library imports
import { from } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';
import { ofType } from 'redux-observable';

// Actions import
import { getContributorsSuccess } from '../actions';

// Constants import
import { GET_CONTRIBUTORS } from '../assets/constants/action-types';
import { MAX_PAGES_FOR_CONTRIBUTORS_API } from '../assets/constants'

// Helper functions import
import { getAllProjectPromise } from './helper';

export const getContributors = action$ => action$.pipe(
	ofType(GET_CONTRIBUTORS),
	map(({ payload }) => payload),
	mergeMap(url =>
		from(getAllProjectPromise(url, MAX_PAGES_FOR_CONTRIBUTORS_API)).pipe(
			map(data => getContributorsSuccess(data))
		)
	)
);
