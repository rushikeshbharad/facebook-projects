import { GET_CONTRIBUTORS_SUCCESS, GET_CONTRIBUTORS } from "../assets/constants/action-types";

export const getContributors = payload => ({
	type: GET_CONTRIBUTORS,
	payload
});

export const getContributorsSuccess = payload => ({
	type: GET_CONTRIBUTORS_SUCCESS,
	payload
});
