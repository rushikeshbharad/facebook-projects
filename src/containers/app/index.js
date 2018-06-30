// Library imports
import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames/bind';
import { connect } from 'react-redux';

// Containers imports
import SidebarNavigation from '../sidebar-navigation';
import ProjectDetails from '../project-details';

// Actions import
import {
	getAllProjects,
	getContributors,
	getContributorsCancel
} from '../../actions';

// Import i18n string getter
import { getString } from '../../assets/i18n';

// Styles imports
import styles from './styles.css';

const cx = ClassNames.bind(styles);

class App extends Component {
	static defaultProps = {
		projects: []
	};

	static propTypes = {
		projects: PropTypes.arrayOf(PropTypes.object)
	};

	state = {
		selectedProjectIndex: 0
	};

	// Maintains the index of currently selected project
	// and dispatches the action to fetch contributors if index has changed
	updateSelectedProjectIndex = selectedProjectIndex => {
		if (selectedProjectIndex !== this.state.selectedProjectIndex) {
			// Cancel contribution fetching if currently going on
			this.props.dispatch(getContributorsCancel());
			// Then fetch contributors for newly selected project
			this.props.dispatch(getContributors(this.props.projects[selectedProjectIndex].contributors_url));
			this.setState({ selectedProjectIndex });
		}
	};

	componentDidMount() {
		this.props.dispatch(getAllProjects());
	}

	render() {
		return (
			<Fragment>
				<div className={cx('app-title')}>{getString('app_title')}</div>
				<div className={cx('app-container')}>
					<SidebarNavigation
						projects={this.props.projects}
						selectedProjectIndex={this.state.selectedProjectIndex}
						updateSelectedProjectIndex={this.updateSelectedProjectIndex}
					/>
					{this.props.projects[this.state.selectedProjectIndex] && <ProjectDetails
						details={this.props.projects[this.state.selectedProjectIndex]}
						contributors={this.props.contributors}
						dispatch={this.props.dispatch}
					/>}
				</div>
			</Fragment>
		);
	}
}

export default connect(state => state)(App);
