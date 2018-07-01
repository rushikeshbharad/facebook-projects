// Library imports
import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import ClassNames from 'classnames/bind';

// Component imports
import NavBlock from '../../components/nav-block';

// Constants import
import { NAME, WATCHERS } from '../../assets/constants';

// Styles imports
import styles from './styles.css';

const cx = ClassNames.bind(styles);

const SidebarNavigation = ({ projects, selectedProjectIndex, updateProjectSelectionIndex }) => {
	return (
		<div className={cx('sidebar-navigator-container')}>
			{projects.map((project, i) =>
				<NavBlock
					key={`nav-block-${i}`}
					projectName={project.get(NAME)}
					watchers={project.get(WATCHERS)}
					selected={selectedProjectIndex === i}
					onSelect={() => {
						updateProjectSelectionIndex(i);
					}}
				/>
			)}
		</div>
	);
};

SidebarNavigation.propTypes = {
	projects: ImmutablePropTypes.listOf(ImmutablePropTypes.map).isRequired,
	selectedProjectIndex: PropTypes.number.isRequired,
	updateProjectSelectionIndex: PropTypes.func.isRequired
};

export default SidebarNavigation;
