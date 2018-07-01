// library imports
import { expect } from 'chai';

// actions import
import {
	getContributorsCancel,
	getContributors,
	getContributorsSuccess,
	getAllProjects,
	getAllProjectsSuccess
} from '../actions';

// action-types import
import {
	GET_PROJECTS_SUCCESS,
	GET_PROJECTS,
	GET_CONTRIBUTORS,
	GET_CONTRIBUTORS_CANCEL,
	GET_CONTRIBUTORS_SUCCESS
} from '../assets/constants/action-types';

describe('#getAllProjects', () => {
	it('should return type as GET_PROJECTS irrespective of payload', () => {
		const result = getAllProjects();
		expect(result.type).to.be.eq(GET_PROJECTS);
	});

	it('should return passed payload', () => {
		const mockPayload = 'mockPayload';
		const result = getAllProjects(mockPayload);
		expect(result.payload).to.be.eq(mockPayload);
	});
});

describe('#getAllProjectsSuccess', () => {
	const mockPayloadSorted = [
		{ watchers: 2543 },
		{ watchers: 1025 },
		{ watchers: 105 }
	];
	const mockPayloadUnsorted = [
		{ watchers: 1024 },
		{ watchers: 2841 },
		{ watchers: 575 }
	];

	it('should return type as GET_PROJECTS_SUCCESS irrespective of payload', () => {
		const result = getAllProjectsSuccess();
		expect(result.type).to.be.eq(GET_PROJECTS_SUCCESS);
	});

	it('should return projects sorted by watchers if unsorted array is provided', () => {
		const result = getAllProjectsSuccess(mockPayloadUnsorted);
		expect(result.payload[0].watchers).to.be.eq(2841);
		expect(result.payload[1].watchers).to.be.eq(1024);
		expect(result.payload[2].watchers).to.be.eq(575);
	});

	it('should return projects sorted by watchers if sorted array is provided', () => {
		const result = getAllProjectsSuccess(mockPayloadSorted);
		expect(result.payload).to.be.eq(mockPayloadSorted);
	});
});

describe('#getContributors', () => {
	it('should return type as GET_CONTRIBUTORS irrespective of payload', () => {
		const result = getContributors();
		expect(result.type).to.be.eq(GET_CONTRIBUTORS);
	});

	it('should return passed payload as it is against payload key', () => {
		const mockPayload = 'mockPayload';
		const result = getContributors(mockPayload);
		expect(result.payload).to.be.eq(mockPayload);
	});
});

describe('#getContributorsSuccess', () => {
	it('should return type as GET_CONTRIBUTORS irrespective of payload', () => {
		const result = getContributorsSuccess();
		expect(result.type).to.be.eq(GET_CONTRIBUTORS_SUCCESS);
	});

	it('should return passed payload as it is against payload key', () => {
		const mockPayload = 'mockPayload';
		const result = getContributorsSuccess(mockPayload);
		expect(result.payload).to.be.eq(mockPayload);
	});
});

describe('#getContributorsCancel', () => {
	it('should return type as GET_CONTRIBUTORS_CANCEL irrespective of payload', () => {
		const result = getContributorsCancel();
		expect(result.type).to.be.eq(GET_CONTRIBUTORS_CANCEL);
	});

	it('should return object with only one key: type', () => {
		const result = getContributorsCancel();
		expect(Object.keys(result)).to.have.length(1);
		expect(Object.keys(result)[0]).to.be.eq('type');
	});
});
