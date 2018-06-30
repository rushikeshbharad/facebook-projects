// Library imports
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import ClassNames from 'classnames/bind';
import { connect } from 'react-redux';
import { List } from 'immutable';

// Components imports
import { Mobile, Desktop } from '../../components/reponsive';
import Spinner from '../../components/spinner';
import FailureWarning from '../../components/failure-warning';

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

// Import constants
import { CONTRIBUTORS_URL, FAILURE, FETCHING, SUCCESS } from '../../assets/constants';

// Styles imports
import styles from './styles.css';

const cx = ClassNames.bind(styles);

class App extends Component {
	static defaultProps = {
		projects: List()
	};

	static propTypes = {
		projects: ImmutablePropTypes.listOf(ImmutablePropTypes.map),
		projectsStatus: PropTypes.string,
		contributors: ImmutablePropTypes.listOf(ImmutablePropTypes.map),
		contributorsStatus: PropTypes.string,
	};

	state = {
		selectedProjectIndex: 0,
		// We display either project list or project detail screen on mobile view
		// isShowingList state helps us to decide which screen should be shown
		isShowingList: true
	};

	// updateSelectedProjectIndex Maintains the index of currently selected project
	// and dispatches the action to fetch contributors if index has been changed
	updateSelectedProjectIndex = (selectedProjectIndex, shouldFetch) => {
		if (selectedProjectIndex !== this.state.selectedProjectIndex) {
			// Should fetch contributors for desktop screen
			// Reason:
			// - Mobile screen shows either project list or project details
			// - Hence contributors data will be fetched by ProjectDetails component on mounting each time
			if (shouldFetch) {
				// Cancel contribution fetching if currently going on
				this.props.dispatch(getContributorsCancel());
				// Then fetch contributors for newly selected project
				this.props.dispatch(getContributors(this.props.projects.getIn([selectedProjectIndex, CONTRIBUTORS_URL])));
			}
			this.setState({ selectedProjectIndex });
		}
	};

	componentDidMount() {
		this.props.dispatch(getAllProjects());
	}

	// Render sidebar and project details side by side when screen width is greater than 850
	renderDesktopContent() {
		return (
			<Desktop>
				<SidebarNavigation
					projects={this.props.projects}
					selectedProjectIndex={this.state.selectedProjectIndex}
					updateSelectedProjectIndex={index => this.updateSelectedProjectIndex(index, true)}
				/>
				{this.props.projects.get(this.state.selectedProjectIndex) && (
					<ProjectDetails
						details={this.props.projects.get(this.state.selectedProjectIndex)}
						contributors={this.props.contributors}
						dispatch={this.props.dispatch}
						contributorsStatus={this.props.contributorsStatus}
					/>
				)}
			</Desktop>
		);
	}

	// Render either sidebar or project details on screen when screen width is less than 851
	renderMobileContent() {
		return (
			<Mobile>
				{this.state.isShowingList && (
					<SidebarNavigation
						projects={this.props.projects}
						selectedProjectIndex={this.state.selectedProjectIndex}
						updateSelectedProjectIndex={index => {
							this.updateSelectedProjectIndex(index, false);
							this.setState({ isShowingList: false });
						}}
					/>
				)}
				{!this.state.isShowingList
				&& this.props.projects.get(this.state.selectedProjectIndex)
				&& (
					<ProjectDetails
						details={this.props.projects.get(this.state.selectedProjectIndex)}
						contributors={this.props.contributors}
						dispatch={this.props.dispatch}
						contributorsStatus={this.props.contributorsStatus}
						backNavigationHandler={() => {
							this.setState({ isShowingList: true });
						}}
					/>
				)}
			</Mobile>
		)
	}

	render() {
		if (this.props.projectsStatus === FAILURE) {
			return <FailureWarning text={getString('project_fetch_failure')} />;
		}

		if (this.props.projectsStatus === FETCHING) {
			return <Spinner />;
		}

		if (this.props.projectsStatus === SUCCESS) {
			return (
				<Fragment>
					<div className={cx('app-title')}>{getString('app_title')}</div>
					<div className={cx('app-container')}>
						{this.renderDesktopContent()}
						{this.renderMobileContent()}
					</div>
				</Fragment>
			);
		}

		return null;
	}
}

export default connect(state => state)(App);
