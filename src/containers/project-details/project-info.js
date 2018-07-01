// Library imports
import React from 'react';
import { List } from 'immutable';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import ClassNames from 'classnames/bind';

// Component imports
import ProjectInfoTab from '../../components/project-info-tab';

// Constants imports
import {
	SVG_PATH_CONTRIBUTORS,
	SVG_PATH_FORKS,
	SVG_PATH_WATCHERS,
	SVG_PATH_PROGRAMMING_LANGUAGE
} from '../../assets/constants';

// I18n import
import { getString } from '../../assets/i18n';

// Styles import
import styles from './styles.css';

const cx = ClassNames.bind(styles);

const ProjectInfo = ({ contributors = List(), forksCount = 0, programmingLanguage, watchersCount = 0 }) => (
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
);

ProjectInfo.propTypes = {
	contributors: ImmutablePropTypes.listOf(ImmutablePropTypes.map),
	forksCount: PropTypes.number,
	programmingLanguage: PropTypes.string,
	watchersCount: PropTypes.number
};

export default ProjectInfo;
