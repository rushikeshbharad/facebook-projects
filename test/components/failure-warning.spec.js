// configure enzyme
import '../setupEnzyme';

// library imports
import React from 'react';
import { expect } from 'chai';
import { shallow, render } from 'enzyme';

// import component
import FailureWarning from '../../src/components/failure-warning';

// I18n import
import { getString } from '../../src/assets/i18n';

describe('#<FailureWarning />', () => {
	it('should renders with default class "failure"', () => {
		const wrapper = shallow(<FailureWarning />);
		expect(wrapper.hasClass('failure')).to.be.true;
	});

	it('should renders with provided classNames', () => {
		const wrapper = shallow(<FailureWarning classNames="new-class" />);
		expect(wrapper.hasClass('new-class')).to.be.true;
	});

	it('should renders with default failure warning if text is not provided', () => {
		const wrapper = shallow(<FailureWarning />);
		const warningElement = wrapper.getNodesInternal()[0].rendered;
		expect(warningElement.rendered).to.be.eq(getString('default_failure_text'));
	});
});
