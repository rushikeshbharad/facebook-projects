// Library imports
import React from 'react';
import PropTypes from 'prop-types';
import ClassName from 'classnames/bind';

// Styles imports
import styles from './styles.css';

const cx = ClassName.bind(styles);

const ProjectInfoTab = ({ info, path }) => {
	return (
		<div className={cx('project-info-tab-holder')}>
			<svg
				className={cx('project-info-svg')}
				width="18"
				height="18"
				role="img"
			>
				<path d={path} />
			</svg>
			<span className={cx('project-info-with-count')}>{info}</span>
		</div>
	);
};

ProjectInfoTab.propTypes = {
	info: PropTypes.string,
	path: PropTypes.string
};

export default ProjectInfoTab;
