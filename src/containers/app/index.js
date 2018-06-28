// Library imports
import React, {Component, Fragment} from 'react';
import ClassNames from 'classnames/bind';
import { connect } from 'react-redux';

// Containers imports
import SidebarNavigtion from '../sidebar-navigation';
import ProjectDetails from '../project-details';

// Action imports
import { getAllProjects } from '../../actions';

// Import i18n string getter
import { getString } from '../../assets/i18n';

// Styles imports
import styles from './styles.css';

const cx = ClassNames.bind(styles);

class App extends Component {
	componentDidMount() {
		getAllProjects()(this.props.dispatch);
	}

	render() {
		return (
			<Fragment>
				<div className={cx('app-title')}>{getString('app_title')}</div>
				<div className={cx('app-container')}>
					<SidebarNavigtion />
					<ProjectDetails />
				</div>
			</Fragment>
		);
	}
}

export default connect(state => state)(App);
