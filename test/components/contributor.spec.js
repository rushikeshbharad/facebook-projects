// configure enzyme
import '../setupEnzyme';

// library imports
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

// import component
import Contributor from '../../src/components/contributor';

// I18n import
import { getString } from '../../src/assets/i18n';

describe('#<Contributor />', () => {
	it('should renders an anchor tag with login name as text', () => {
		const wrapper = shallow(<Contributor avatarUrl={'https://abc.xyz'} contributions={2} html_url={'https://xyz.abc'} login={'loginId'} />);
		expect(wrapper.find('a').text()).to.be.eq('loginId');
	});

	it('should renders an anchor tag with provided href', () => {
		const wrapper = shallow(<Contributor avatarUrl={'https://abc.xyz'} contributions={2} html_url={'https://xyz.abc'} login={'loginId'} />);
		expect(wrapper.find('a[href="https://xyz.abc"]')).to.be.exist;
	});

	it('should renders with a span with number of contributions the developer has made', () => {
		const wrapper = shallow(<Contributor avatarUrl={'https://abc.xyz'} contributions={2} html_url={'https://xyz.abc'} login={'loginId'} />);
		expect(wrapper.find('span').text()).to.be.eq(getString('number_of_contributions', { number: 2 }));
	});

	it('should renders with an element with background image provided', () => {
		const wrapper = shallow(<Contributor avatarUrl={'https://abc.xyz'} contributions={2} html_url={'https://xyz.abc'} login={'loginId'} />);
		const style = wrapper.getNodesInternal()[0].rendered.find(a => a.props.className === 'contributor-avatar').props.style;
		expect(style).to.have.property('backgroundImage', 'url(https://abc.xyz)');
	});
});
