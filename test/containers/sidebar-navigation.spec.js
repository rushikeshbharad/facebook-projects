// configure enzyme
import '../setupEnzyme';

// library imports
import React from 'react';
import { fromJS } from 'immutable';
import { expect } from 'chai';
import { shallow } from 'enzyme';

// import component
import SidebarNavigation from '../../src/containers/sidebar-navigation';
import NavBlock from '../../src/components/nav-block';

describe('#<SidebarNavigation />', () => {
	const projects = [
		{ name: 'project1', watchers: 254 },
		{ name: 'project2', watchers: 156 },
		{ name: 'project3', watchers: 42 },
		{ name: 'project4', watchers: 731 },
	];

	it('should renders with 3 Contributor components', () => {
		const wrapper = shallow(<SidebarNavigation
			projects={fromJS(projects)}
			selectedProjectIndex={2}
			updateProjectSelectionIndex={() => {}}
		/>);
		expect(wrapper.find(NavBlock)).to.have.length(4)
	});

	it('should renders with third NavBlock with prop selected as true', () => {
		const wrapper = shallow(<SidebarNavigation
			projects={fromJS(projects)}
			selectedProjectIndex={2}
			updateProjectSelectionIndex={() => {}}
		/>);
		const thirdNavBlock = wrapper.find(NavBlock).getNodesInternal()[2];
		expect(thirdNavBlock.props.selected).to.be.true;
	});

	it('should renders with third NavBlock with prop given watchers and name for third project', () => {
		const wrapper = shallow(<SidebarNavigation
			projects={fromJS(projects)}
			selectedProjectIndex={2}
			updateProjectSelectionIndex={() => {}}
		/>);
		const thirdNavBlock = wrapper.find(NavBlock).getNodesInternal()[2];
		expect(thirdNavBlock.props.watchers).to.eq(42);
		expect(thirdNavBlock.props.projectName).to.eq('project3');
	});

	it('should renders with multiple NavBlocks which are allowed to be selected; selected index is sent to callback as parameter', () => {
		let selected = 3;
		const getSelectedNavBlockIndex = i => {
			selected = i;
		};
		const wrapper = shallow(<SidebarNavigation
			projects={fromJS(projects)}
			selectedProjectIndex={2}
			updateProjectSelectionIndex={getSelectedNavBlockIndex}
		/>);
		const thirdNavBlock = wrapper.find(NavBlock).getNodesInternal()[1];
		thirdNavBlock.props.onSelect(1);
		expect(selected).to.eq(1);
	});
});
