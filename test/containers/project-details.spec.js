// configure enzyme
import '../setupEnzyme';

// library imports
import React from 'react';
import { fromJS } from 'immutable';
import { expect } from 'chai';
import { shallow } from 'enzyme';

// import component
import ProjectContributors from '../../src/containers/project-details/project-contributors';
import ProjectHeader from '../../src/containers/project-details/project-header';
import ProjectInfo from '../../src/containers/project-details/project-info';
import ProjectInfoTab from '../../src/components/project-info-tab';
import Contributor from '../../src/components/contributor';

// I18n import
import { getString } from '../../src/assets/i18n';

describe('#<ProjectDetails />', () => {
	describe('#<ProjectContributors />', () => {
		const contributors = [
			{ login: 'abc', avatar_url: 'xyz.abc', contributions: 3, html_url: 'abc.pqr' },
			{ login: 'def', avatar_url: 'xyz.def', contributions: 3, html_url: 'def.pqr' },
			{ login: 'ijk', avatar_url: 'xyz.ijk', contributions: 3, html_url: 'ijk.pqr' }
		];

		it('should renders with 3 Contributor components', () => {
			const wrapper = shallow(<ProjectContributors contributors={fromJS(contributors)} />);
			expect(wrapper.find(Contributor)).to.have.length(3);
		});

		it('should renders with 0 Contributor components', () => {
			const wrapper = shallow(<ProjectContributors contributors={fromJS([])} />);
			expect(wrapper.find(Contributor)).to.have.length(0);
		});

		it('should renders watcher count wrapped by nav-block-watchers class', () => {
			const wrapper = shallow(<ProjectContributors contributors={fromJS(contributors)} />);
			const contributorTitleElement = wrapper.getNodesInternal()[0].rendered.find(a => a.props.className === 'contributors-title');
			expect(contributorTitleElement.rendered).to.eq(getString('contributors_title', { number: 3 }));
		});
	});

	describe('#<ProjectHeader />', () => {
		it('should renders with anchor tag as a provided title when homepage is not provided', () => {
			const wrapper = shallow(<ProjectHeader title="Title1" />);
			expect(wrapper.find('a').text()).to.eq('Title1');
		});

		it('should renders with first anchor tag as a provided title when homepage is also provided as a prop', () => {
			const wrapper = shallow(<ProjectHeader title="Title1" homepage="project.domain" />);
			expect(wrapper.find('a').getNodesInternal()[0].rendered).to.eq('Title1');
		});

		it('should renders with another anchor tag as a provided homepage', () => {
			const wrapper = shallow(<ProjectHeader homepage="project.domain" />);
			expect(wrapper.find('a').getNodesInternal()[1].rendered).to.eq('project.domain');
		});

		it('should renders with first spam as provided description', () => {
			const wrapper = shallow(<ProjectHeader description="Description1" />);
			expect(wrapper.find('span').getNodesInternal()[0].rendered).to.eq('Description1');
		});

		it('should renders with second spam as provided created date', () => {
			const wrapper = shallow(<ProjectHeader description="Description1" createdAt="2018-07-01T18:05:21+05:30" />);
			expect(wrapper.find('span').getNodesInternal()[1].rendered).to.eq(getString('created_at', { date: '01 Jul 2018' }));
		});

		it('should renders with third spam as provided created date', () => {
			const wrapper = shallow(<ProjectHeader description="Description1" updatedAt="2018-06-30T18:05:21+05:30" />);
			expect(wrapper.find('span').getNodesInternal()[2].rendered).to.eq(getString('updated_at', { date: '30 Jun 2018' }));
		});
	});

	describe('#<ProjectInfo />', () => {
		it('should renders 4 ProjectInfoTab components', () => {
			const wrapper = shallow(<ProjectInfo />);
			expect(wrapper.find(ProjectInfoTab)).to.have.length(4);
		});

		it('should renders with class "project-info"', () => {
			const wrapper = shallow(<ProjectInfo />);
			expect(wrapper.hasClass('project-info')).to.be.true;
		});

		it('should renders watchers count ProjectInfoTab with watchers count provided', () => {
			const wrapper = shallow(<ProjectInfo watchersCount={41} />);
			const watchersCountElement = wrapper.find(ProjectInfoTab).getNodesInternal()[0];
			expect(watchersCountElement.props.info).to.eq(getString('number_of_watchers', { number: 41 }));
		});

		it('should renders forks count ProjectInfoTab with forks count provided', () => {
			const wrapper = shallow(<ProjectInfo forksCount={72} />);
			const watchersCountElement = wrapper.find(ProjectInfoTab).getNodesInternal()[1];
			expect(watchersCountElement.props.info).to.eq(getString('number_of_forks', { number: 72 }));
		});

		it('should renders contributors count ProjectInfoTab with contributors count provided', () => {
			const wrapper = shallow(<ProjectInfo contributors={fromJS([{}, {}])} />);
			const watchersCountElement = wrapper.find(ProjectInfoTab).getNodesInternal()[2];
			expect(watchersCountElement.props.info).to.eq(getString('number_of_contributors', { number: 2 }));
		});

		it('should renders programming language ProjectInfoTab with programming language provided', () => {
			const wrapper = shallow(<ProjectInfo programmingLanguage="Javascript" />);
			const watchersCountElement = wrapper.find(ProjectInfoTab).getNodesInternal()[3];
			expect(watchersCountElement.props.info).to.eq('Javascript');
		});
	});
});
