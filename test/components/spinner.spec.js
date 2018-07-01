// configure enzyme
import '../setupEnzyme';

// library imports
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

// import component
import Spinner from '../../src/components/spinner';

// SVG path import
import { SVG_PATH_SPINNER } from '../../src/assets/constants';

describe('#<Spinner />', () => {
	it('should renders with default class "spinner"', () => {
		const wrapper = shallow(<Spinner />);
		expect(wrapper.hasClass('spinner')).to.be.true;
	});

	it('should renders with provided classNames', () => {
		const wrapper = shallow(<Spinner classNames="new-class" />);
		expect(wrapper.hasClass('new-class')).to.be.true;
	});

	it('should renders with svg having class name "spinner-svg"', () => {
		const wrapper = shallow(<Spinner />);
		const pathElement = wrapper.find('svg');
		expect(pathElement.hasClass('spinner-svg')).to.be.true;
	});

	it('should renders with svg path SVG_PATH_SPINNER', () => {
		const wrapper = shallow(<Spinner />);
		const pathElement = wrapper.find('path');
		expect(pathElement.props().d).to.eq(SVG_PATH_SPINNER);
	});
});
