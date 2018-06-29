// Library imports
import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames/bind';
import { connect } from 'react-redux';

// Containers imports
import SidebarNavigation from '../sidebar-navigation';
import ProjectDetails from '../project-details';

// Action imports
import { getAllProjects, getContributors} from '../../actions';

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

	constructor(props) {
		super(props);
		this.state = {
			selectedProjectIndex: 0
		}
	}

	updateSelectedProjectIndex = selectedProjectIndex => {
		if (selectedProjectIndex !== this.state.selectedProjectIndex) {
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
					/>}
				</div>
			</Fragment>
		);
	}
}

export default connect(state => state)(App);
