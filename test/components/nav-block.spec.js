// configure enzyme
import '../setupEnzyme';

// library imports
import React from 'react';
import { expect } from 'chai';
import { shallow, render } from 'enzyme';

// import component
import NavBlock from '../../src/components/nav-block';

describe('#<NavBlock />', () => {
	it('should renders with default class', () => {
		const wrapper = shallow(<NavBlock />);
		expect(wrapper.hasClass('nav-block')).to.be.true;
	});

	it('should renders with class "selected" if selected prop is provided as true', () => {
		const wrapper = shallow(<NavBlock selected />);
		expect(wrapper.hasClass('selected')).to.be.true;
	});

	it('should renders without class "selected" if selected prop is not provided', () => {
		const wrapper = shallow(<NavBlock />);
		expect(wrapper.hasClass('selected')).to.be.false;
	});

	it('should renders with project name element', () => {
		const wrapper = shallow(<NavBlock projectName={'facebook-projects'} />);
		const projectNameElement = wrapper.getNodesInternal()[0].rendered.find(a => a.props.className === 'nav-block-project-name');
		expect(projectNameElement.rendered).to.be.eq('facebook-projects');
	});

	it('should renders watcher count wrapped by nav-block-watchers class', () => {
		const wrapper = shallow(<NavBlock watchers={101} />);
		const navBlockWatcherElement = wrapper.getNodesInternal()[0].rendered.find(a => a.props.className === 'nav-block-watchers');
		const watchersCountElement = navBlockWatcherElement.rendered.find(a => a.props.className === 'watchers-count');
		expect(watchersCountElement.rendered).to.be.eq(101);
	});

	it('should call onSelect prop on clicking the NavBlock', () => {
		let selected = false;
		const onSelect = () => {
			selected = true;
		};
		const wrapper = shallow(<NavBlock onSelect={onSelect} />);
		wrapper.simulate('click');
		expect(selected).to.be.true;
	});
});
