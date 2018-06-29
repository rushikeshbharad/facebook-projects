import { GET_CONTRIBUTORS_SUCCESS } from "../assets/constants/action-types";

export const getContributors = url => dispatch => {
	fetch(url).then(r => r.json()).then(response => {
		// Here payload is list of contributors
		const payload = response.map(r => ({ name: r.commit.author.name, avatarURL: r.author.avatar_url }));
		dispatch({
			type: GET_CONTRIBUTORS_SUCCESS,
			payload
		});
	});
};
