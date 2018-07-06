import { CANCELLED, FAILURE, FETCHING, SUCCESS } from '../assets/constants';

const colorParameters = {
	[FETCHING]: 'color: #028e09',
	[SUCCESS]: 'color: #028e09',
	[FAILURE]: 'color: #f22e31',
	[CANCELLED]: 'color: #d6d60a'
};

// Logs the provided text with timestamp in color depending on type of action
// FETCHING, SUCCESS: readable Green
// CANCELLED: readable yellow
// FAILURE: readable red
export const logger = (text, type) => {
	console.log(`%c ${new Date().getTime()} - ${text} `, colorParameters[type]);
};
