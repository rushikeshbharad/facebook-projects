// configure enzyme
import '../setupEnzyme';

// library imports
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

// import component
import BackNavigator from '../../src/components/back-navigator';

describe('#<BackNavigator />', () => {
	it('should renders with text "<"', () => {
		const wrapper = shallow(<BackNavigator />);
		expect(wrapper.text()).to.eq('<');
	});

	it('should renders with class "back-navigator"', () => {
		const wrapper = shallow(<BackNavigator />);
		expect(wrapper.hasClass('back-navigator')).to.be.true;
	});

	it('should renders with provided className', () => {
		const wrapper = shallow(<BackNavigator classNames="new-class" />);
		expect(wrapper.hasClass('new-class')).to.be.true;
	});

	it('should call onClick prop on clicking the navigator', () => {
		let clicked = false;
		const onClick = () => {
			clicked = true;
		};
		const wrapper = shallow(<BackNavigator onClick={onClick} />);
		wrapper.simulate('click');
		expect(clicked).to.be.true;
	});
});
