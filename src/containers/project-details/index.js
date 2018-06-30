// Library imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames/bind';
import moment from 'moment';

// Components imports
import Contributors from '../../components/contributor';
import ProjectInfoTab from '../../components/project-info-tab';
import BackNavigator from '../../components/back-navigator';
import { Mobile } from '../../components/reponsive';

// Actions imports
import { getContributors, getContributorsCancel } from '../../actions';

// I18n import
import { getString } from '../../assets/i18n';

// Constants import
import {
	SVG_PATH_WATCHERS,
	SVG_PATH_FORKS,
	SVG_PATH_CONTRIBUTORS,
	SVG_PATH_PROGRAMMING_LANGUAGE
} from '../../assets/constants';

// Styles imports
import styles from './styles.css';

const cx = ClassNames.bind(styles);

class ProjectDetails extends Component {
	static defaultProps = {
		contributors: []
	};

	static propTypes = {
		details: PropTypes.shape({
			full_name: PropTypes.string,
			description: PropTypes.string,
			homepage: PropTypes.string,
			html_url: PropTypes.string,
			contributors: PropTypes.array,
			dispatch: PropTypes.func
		})
	};

	// App container's method "updateSelectedProjectIndex" fetches contributors
	// only when the index of currently selected project changes.
	// And does not consider first time render.
	// Here componentDidMount fetches contributors for initially selected project
	componentDidMount() {
		this.props.dispatch(getContributorsCancel());
		this.props.dispatch(getContributors(this.props.details.get('contributors_url')));
	}

	render() {
		const { details, contributors, backNavigationHandler } = this.props;
		const title = details.get('full_name');
		const description = details.get('description');
		const homepage = details.get('homepage');
		const gitUrl = details.get('html_url');
		const createdAt = details.get('created_at');
		const updatedAt = details.get('updated_at');
		const watchersCount = details.get('watchers_count');
		const forksCount = details.get('forks_count');
		const programmingLanguage = details.get('language');

		return (
			<div className={cx('project-details')}>
				<Mobile>
					<BackNavigator classNames={cx('back-navigator-top')} onClick={ backNavigationHandler } />
				</Mobile>
				<a href={gitUrl} target="_blank" className={cx('project-title')}>{title}</a>
				{description && <span className={cx('project-description')}>{description}</span>}
				{homepage && <a href={homepage} target="_blank" className={cx('project-homepage')}>{homepage}</a>}
				<div className={cx('project-events')}>
					<span className={cx('project-created-at')}>
						{getString('created_at', { date: moment(createdAt).format('DD MMM YYYY') })}
					</span>
					<span className={cx('project-updated-at')}>
						{getString('updated_at', { date: moment(updatedAt).format('DD MMM YYYY') })}
					</span>
				</div>
				<div className={cx('project-info')}>
					<ProjectInfoTab
						info={getString('number_of_watchers', { number: watchersCount })}
						path={SVG_PATH_WATCHERS}
					/>
					<ProjectInfoTab
						info={getString('number_of_forks', { number: forksCount })}
						path={SVG_PATH_FORKS}
					/>
					<ProjectInfoTab
						info={getString('number_of_contributors', { number: contributors.size })}
						path={SVG_PATH_CONTRIBUTORS}
					/>
					<ProjectInfoTab
						info={programmingLanguage}
						path={SVG_PATH_PROGRAMMING_LANGUAGE}
					/>
				</div>
				<div className={cx('contributors-title')}>
					{getString('contributors_title', { number: contributors.size })}
				</div>
				<div className={cx('contributors')}>
					{contributors.map(contributor =>
						<Contributors
							key={`contributor-${contributor.get('login')}`}
							avatarUrl={contributor.get('avatar_url')}
							contributions={contributor.get('contributions')}
							htmlUrl={contributor.get('html_url')}
							login={contributor.get('login')}
						/>
					)}
				</div>
				<Mobile>
					<BackNavigator classNames={cx('back-navigator-bottom')} onClick={ backNavigationHandler } />
				</Mobile>
			</div>
		);
	}
}

export default ProjectDetails;
