import {
	GET_CONTRIBUTORS_SUCCESS,
	GET_CONTRIBUTORS,
	GET_CONTRIBUTORS_CANCEL
} from '../assets/constants/action-types';

export const getContributors = (projectId, payload) => ({
	type: GET_CONTRIBUTORS,
	payload,
  projectId
});

export const getContributorsSuccess = (projectId, payload) => ({
	type: GET_CONTRIBUTORS_SUCCESS,
	payload,
  projectId
});

export const getContributorsCancel = () => ({
	type: GET_CONTRIBUTORS_CANCEL
});
