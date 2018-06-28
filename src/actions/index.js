import { GET_PROJECT_SUCCESS } from '../constants/action-types';

export const getAllProjects = () => dispatch => {
	dispatch({
		type: GET_PROJECT_SUCCESS,
		payload: { testData: true }
	});
};
