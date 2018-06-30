import {
	GET_CONTRIBUTORS_SUCCESS,
	GET_CONTRIBUTORS,
	GET_CONTRIBUTORS_CANCEL
} from '../assets/constants/action-types';

export const getContributors = payload => ({
	type: GET_CONTRIBUTORS,
	payload
});

export const getContributorsSuccess = payload => ({
	type: GET_CONTRIBUTORS_SUCCESS,
	payload
});

export const getContributorsCancel = () => ({
	type: GET_CONTRIBUTORS_CANCEL
});
