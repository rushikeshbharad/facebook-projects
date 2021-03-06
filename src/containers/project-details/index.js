// Library imports
import React, { Component, Fragment } from 'react';
import { List } from 'immutable';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import ClassNames from 'classnames/bind';

// Components imports
import ProjectHeader from './project-header';
import ProjectInfo from './project-info';
import ProjectContributors from './project-contributors';
import BackNavigator from '../../components/back-navigator';
import Spinner from '../../components/spinner';
import FailureWarning from '../../components/failure-warning';
import { Mobile } from '../../components/reponsive';

// Actions imports
import { getContributors, getContributorsCancel } from '../../actions';


// Import i18n string getter
import { getString } from '../../assets/i18n';

// Constants import
import {
	CONTRIBUTORS_URL,
	CREATED_AT,
	DESCRIPTION,
	FAILURE,
	FETCHING,
	FORKS_COUNT,
	FULL_NAME,
	HOMEPAGE,
	HTML_URL,
	LANGUAGE,
	UPDATED_AT,
	WATCHERS_COUNT
} from '../../assets/constants';

// Styles imports
import styles from './styles.css';

const cx = ClassNames.bind(styles);

class ProjectDetails extends Component {
	static defaultProps = {
		contributors: List()
	};

	static propTypes = {
		details: ImmutablePropTypes.mapContains({
			full_name: PropTypes.string,
			description: PropTypes.string,
			homepage: PropTypes.string,
			html_url: PropTypes.string,
			created_at: PropTypes.string,
			update_at: PropTypes.string,
			watchers_count: PropTypes.number,
			forks_count: PropTypes.number,
			language: PropTypes.string
		}),
		contributors: ImmutablePropTypes.listOf(ImmutablePropTypes.map),
		contributorsStatus: PropTypes.string,
		backNavigationHandler: PropTypes.func,
		dispatch: PropTypes.func,
    projectIndex: PropTypes.number
	};

	componentDidMount() {
		// Fetch contributors
    this.props.dispatch(getContributors(this.props.projectIndex, this.props.details.get(CONTRIBUTORS_URL)));
	}

	componentWillUnmount() {
		// Cancel fetch contributors if are being fetched at the moment
		if (this.props.contributorsStatus === FETCHING) {
      this.props.dispatch(getContributorsCancel());
		}
	}

	renderContributors() {
		const { contributors, contributorsStatus } = this.props;

		return (
			<Fragment>
				{!contributors.size && contributorsStatus === FETCHING && <Spinner classNames={cx('contributors-spinner')} />}
				{contributorsStatus === FAILURE && <FailureWarning
					classNames={cx('contributors-failure')}
					text={getString('contributors_fetch_failure')}
				/>}
				{!!contributors.size && <ProjectContributors {...{ contributors }} />}
			</Fragment>
		);
	}

	render() {
		const { details, contributors, backNavigationHandler } = this.props;
		const title = details.get(FULL_NAME);
		const description = details.get(DESCRIPTION);
		const homepage = details.get(HOMEPAGE);
		const gitUrl = details.get(HTML_URL);
		const createdAt = details.get(CREATED_AT);
		const updatedAt = details.get(UPDATED_AT);
		const watchersCount = details.get(WATCHERS_COUNT);
		const forksCount = details.get(FORKS_COUNT);
		const programmingLanguage = details.get(LANGUAGE);

		return (
			<div className={cx('project-details')}>
				{/*
				  Back navigator is needed display only for Mobile view,
				  because mobile view shows either project detail screen or project list
				*/}
				<Mobile>
					<BackNavigator classNames={cx('back-navigator-top')} onClick={ backNavigationHandler } />
				</Mobile>
				<ProjectHeader {...{ description, gitUrl, homepage, title, createdAt, updatedAt }} />
				<ProjectInfo {...{ contributors, forksCount, programmingLanguage, watchersCount }}/>
				{this.renderContributors()}
				<Mobile>
					<BackNavigator classNames={cx('back-navigator-bottom')} onClick={ backNavigationHandler } />
				</Mobile>
			</div>
		);
	}
}

export default ProjectDetails;
