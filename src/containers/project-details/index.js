// Library imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames/bind';
import moment from 'moment';

// Components imports
import Contributors from '../../components/contributor';
import ProjectInfoTab from '../../components/project-info-tab';

// Actions imports
import { getContributors } from '../../actions';

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
		this.props.dispatch(getContributors(this.props.details.contributors_url));
	}

	render() {
		const { details: {
			full_name: title,
			description,
			homepage,
			html_url: gitUrl,
			created_at,
			updated_at,
			watchers_count,
			forks_count,
			language
		}, contributors } = this.props;

		return (
			<div className={cx('project-details')}>
				<a href={gitUrl} target="_blank" className={cx('project-title')}>{title}</a>
				{description && <span className={cx('project-description')}>{description}</span>}
				{homepage && <a href={homepage} target="_blank" className={cx('project-homepage')}>{homepage}</a>}
				<div className={cx('project-events')}>
					<span className={cx('project-created-at')}>
						{getString('created_at', { date: moment(created_at).format('DD MMM YYYY') })}
					</span>
					<span className={cx('project-created-at')}>
						{getString('updated_at', { date: moment(updated_at).format('DD MMM YYYY') })}
					</span>
				</div>
				<div className={cx('project-info')}>
					<ProjectInfoTab
						info={getString('number_of_watchers', { number: watchers_count })}
						path={SVG_PATH_WATCHERS}
					/>
					<ProjectInfoTab
						info={getString('number_of_forks', { number: forks_count })}
						path={SVG_PATH_FORKS}
					/>
					<ProjectInfoTab
						info={getString('number_of_contributors', { number: contributors.length })}
						path={SVG_PATH_CONTRIBUTORS}
					/>
					<ProjectInfoTab
						info={language}
						path={SVG_PATH_PROGRAMMING_LANGUAGE}
					/>
				</div>
				<div className={cx('contributors-title')}>
					{getString('contributors_title', { number: contributors.length })}
				</div>
				<div className={cx('contributors')}>
					{contributors.map(contributor =>
						<Contributors key={`contributor-${contributor.login}`} {...contributor} />
					)}
				</div>
			</div>
		);
	}
}

export default ProjectDetails;
