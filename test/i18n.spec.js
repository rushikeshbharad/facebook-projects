// library imports
import { expect } from 'chai';

// i18n getter import
import { getString } from '../src/assets/i18n';

describe('#getString', () => {
	it('should return provided state as it is if action type is not GET_PROJECTS_SUCCESS', () => {
		const result = getString('');
		expect(result).to.eq('*** BROKEN STRING, key => ');
	});

	it('should return exact string against the provided key', () => {
		const result = getString('app_title');
		expect(result).to.eq('List of projects owned by Facebook on Github');
	});

	it('should return string with parameter', () => {
		const result = getString('contributors_title', { number: 12 });
		expect(result).to.eq('Contributors (12)');
	});

	it('should return string with broken parameter if not provided', () => {
		const result = getString('contributors_title');
		expect(result).to.eq('Contributors (<%=number=%>)');
	});

	it('should return correct string multiple parameters', () => {
		const result = getString('test_key', { parameter1: 'p1', parameter2: 'p2', parameter3: 'p3' });
		expect(result).to.eq('test string p1, p2 and p3');
	});
});
