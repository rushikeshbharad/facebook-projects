import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllProjects } from '../../actions';

class App extends Component {
	componentDidMount() {
		getAllProjects()(this.props.dispatch);
	}

	render() {
		return (
			<div>First commit :)</div>
		);
	}
}

export default connect(state => state)(App);
