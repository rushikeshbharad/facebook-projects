// library imports
import { fromJS, is } from 'immutable';
import { expect } from 'chai';

// reducers import
import { getAllProjects, getProjectsStatus } from '../src/reducers/get-all-projects';
import { getContributors, getContributorsStatus } from '../src/reducers/get-contributors';

// action-types import
import {
	GET_CONTRIBUTORS,
	GET_CONTRIBUTORS_CANCEL,
	GET_CONTRIBUTORS_FAILURE,
	GET_CONTRIBUTORS_SUCCESS,
	GET_PROJECTS,
	GET_PROJECTS_FAILURE,
	GET_PROJECTS_SUCCESS
} from '../src/assets/constants/action-types';

// API statuses
import { CANCELLED, FAILURE, FETCHING, SUCCESS} from '../src/assets/constants/index';

describe('#getAllProjects', () => {
	it('should return provided state as it is if action type is not GET_PROJECTS_SUCCESS', () => {
		const state = 'mockState';
		const mockPayload = { a: 'x', b: 'y' };
		const action = { type: GET_PROJECTS, payload: mockPayload };
		const result = getAllProjects(state, action);
		expect(result).to.be.eq(state);
	});

	it('should return provided empty List if undefined state is provided with action type other than GET_PROJECTS_SUCCESS', () => {
		const state = undefined;
		const mockPayload = { a: 'x', b: 'y' };
		const action = { type: GET_PROJECTS, payload: mockPayload };
		const result = getAllProjects(state, action);
		expect(result.size).to.be.eq(0);
	});

	it('should return new payload wrapped in immutable object if action type is GET_PROJECTS_SUCCESS', () => {
		const state = 'mockState';
		const mockPayload = { a: 'x', b: 'y' };
		const action = { type: GET_PROJECTS_SUCCESS, payload: mockPayload };
		const result = getAllProjects(state, action);
		expect(is(result, fromJS(mockPayload))).to.be.true;
	});
});


describe('#getProjectsStatus', () => {
	const logger = console.log;
	// getProjectsStatus logs all actions with a little description
	// disable the logs just before execution of this function
	// and enable the logs just after the execution of this function
	// doing this in beforeEach and afterEach would result not logging outputs of this unit test
	const disableLog = () => {
		console.log = () => {};
	};
	const enableLog = () => {
		console.log = logger;
	};

	it('should return fetching if action type is GET_PROJECTS', () => {
		const state = '';
		const action = { type: GET_PROJECTS };
		disableLog();
		const result = getProjectsStatus(state, action);
		enableLog();
		expect(result).to.be.eq(FETCHING);
	});

	it('should return failure if action type is GET_PROJECTS_FAILURE', () => {
		const state = '';
		const action = { type: GET_PROJECTS_FAILURE };
		disableLog();
		const result = getProjectsStatus(state, action);
		enableLog();
		expect(result).to.be.eq(FAILURE);
	});

	it('should return success if action type is GET_PROJECTS_SUCCESS', () => {
		const state = '';
		const action = { type: GET_PROJECTS_SUCCESS };
		disableLog();
		const result = getProjectsStatus(state, action);
		enableLog();
		expect(result).to.be.eq(SUCCESS);
	});

	it('should return provided state if action type is none of the above', () => {
		const state = SUCCESS;
		const action = { type: GET_CONTRIBUTORS };
		const result = getProjectsStatus(state, action);
		expect(result).to.be.eq(SUCCESS);
	});
});

describe('#getContributors', () => {
	it('should return new payload wrapped in immutable object if action type is GET_CONTRIBUTORS_SUCCESS', () => {
		const state = 'mockState';
		const mockPayload = { a: 'x', b: 'y' };
		const action = { type: GET_CONTRIBUTORS_SUCCESS, payload: mockPayload };
		const result = getContributors(state, action);
		expect(is(result, fromJS(mockPayload))).to.be.true;
	});

	it('should return empty immutable list if action type is GET_CONTRIBUTORS_FAILURE', () => {
		const state = 'mockState';
		const action = { type: GET_CONTRIBUTORS_FAILURE };
		const result = getContributors(state, action);
		expect(result.size).to.be.eq(0);
	});

	it('should return empty immutable list if action type is GET_CONTRIBUTORS_CANCEL', () => {
		const state = 'mockState';
		const action = { type: GET_CONTRIBUTORS_CANCEL };
		const result = getContributors(state, action);
		expect(result.size).to.be.eq(0);
	});

	it('should return provided state as it is if action type is none of above', () => {
		const state = 'mockState';
		const mockPayload = { a: 'x', b: 'y' };
		const action = { type: GET_PROJECTS, payload: mockPayload };
		const result = getContributors(state, action);
		expect(result).to.be.eq(state);
	});
});

describe('#getContributorsStatus', () => {
	const logger = console.log;
	// getProjectsStatus logs all actions with a little description
	// disable the logs just before execution of this function
	// and enable the logs just after the execution of this function
	// doing this in beforeEach and afterEach would result not logging outputs of this unit test
	const disableLog = () => {
		console.log = () => {};
	};
	const enableLog = () => {
		console.log = logger;
	};

	it('should return fetching if action type is GET_CONTRIBUTORS', () => {
		const state = '';
		const action = { type: GET_CONTRIBUTORS };
		disableLog();
		const result = getContributorsStatus(state, action);
		enableLog();
		expect(result).to.be.eq(FETCHING);
	});

	it('should return failure if action type is GET_CONTRIBUTORS_FAILURE', () => {
		const state = '';
		const action = { type: GET_CONTRIBUTORS_FAILURE };
		disableLog();
		const result = getContributorsStatus(state, action);
		enableLog();
		expect(result).to.be.eq(FAILURE);
	});

	it('should return success if action type is GET_CONTRIBUTORS_SUCCESS', () => {
		const state = '';
		const action = { type: GET_CONTRIBUTORS_SUCCESS };
		disableLog();
		const result = getContributorsStatus(state, action);
		enableLog();
		expect(result).to.be.eq(SUCCESS);
	});

	it('should return cancelled if action type is GET_CONTRIBUTORS_CANCEL', () => {
		const state = '';
		const action = { type: GET_CONTRIBUTORS_CANCEL };
		disableLog();
		const result = getContributorsStatus(state, action);
		enableLog();
		expect(result).to.be.eq(CANCELLED);
	});

	it('should return provided state if action type is none of the above', () => {
		const state = SUCCESS;
		const action = { type: GET_PROJECTS };
		const result = getContributorsStatus(state, action);
		expect(result).to.be.eq(SUCCESS);
	});
});
