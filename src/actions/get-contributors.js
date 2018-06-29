import { GET_CONTRIBUTORS_SUCCESS, GET_CONTRIBUTORS } from "../assets/constants/action-types";

export const getContributors = payload => {
	return {
		type: GET_CONTRIBUTORS,
		payload
	};
};

export const getContributorsSuccess = payload => {
	return {
		type: GET_CONTRIBUTORS_SUCCESS,
		payload
	};
};
