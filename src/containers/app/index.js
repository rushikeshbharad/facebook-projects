// Library imports
import React, {Component, Fragment} from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import ClassNames from 'classnames/bind';
import { connect } from 'react-redux';
import { List } from 'immutable';

// Components imports
import { Mobile, Desktop } from '../../components/reponsive';

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
		projects: List()
	};

	static propTypes = {
		projects: ImmutablePropTypes.listOf(ImmutablePropTypes.map)
	};

	state = {
		selectedProjectIndex: 0,
		isShowingList: true
	};

	// Maintains the index of currently selected project
	// and dispatches the action to fetch contributors if index has changed
	updateSelectedProjectIndex = (selectedProjectIndex, shouldFetch) => {
		if (selectedProjectIndex !== this.state.selectedProjectIndex) {
			if (shouldFetch) {
				// Cancel contribution fetching if currently going on
				this.props.dispatch(getContributorsCancel());
				// Then fetch contributors for newly selected project
				this.props.dispatch(getContributors(this.props.projects.getIn([selectedProjectIndex, 'contributors_url'])));
			}
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
							/>
						)}
					</Desktop>
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
									backNavigationHandler={() => {
										this.setState({ isShowingList: true });
									}}
								/>
						)}
					</Mobile>
				</div>
			</Fragment>
		);
	}
}

export default connect(state => state)(App);
