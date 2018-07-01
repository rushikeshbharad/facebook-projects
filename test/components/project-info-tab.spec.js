// configure enzyme
import '../setupEnzyme';

// library imports
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

// import component
import ProjectInfoTab from '../../src/components/project-info-tab';

describe('#<ProjectInfoTab />', () => {
	it('should renders with class "project-info-tab-holder"', () => {
		const wrapper = shallow(<ProjectInfoTab />);
		expect(wrapper.hasClass('project-info-tab-holder')).to.be.true;
	});

	it('should renders with svg whose role is "img"', () => {
		const wrapper = shallow(<ProjectInfoTab />);
		const pathElement = wrapper.find('svg');
		expect(pathElement.props().role).to.eq('img');
	});

	it('should renders with svg path provided as a prop', () => {
		const wrapper = shallow(<ProjectInfoTab path="c1 b2" />);
		const pathElement = wrapper.find('path');
		expect(pathElement.props().d).to.eq('c1 b2');
	});

	it('should renders with tab info provided as a prop', () => {
		const wrapper = shallow(<ProjectInfoTab info="My tab" />);
		const pathElement = wrapper.find('span');
		expect(pathElement.text()).to.eq('My tab');
	});
});
