export const LOGGER_TYPE = {
	FETCHING: 0,
	SUCCESS: 1,
	FAILURE: 2,
	CANCELLED: 3
};

const colorParameters = {
	0: 'color: #028e09',
	1: 'color: #028e09',
	2: 'color: #f22e31',
	3: 'color: #d6d60a'
};

export const logger = (text, type) => {
	console.log(`%c ${text} `, colorParameters[type]);
};
