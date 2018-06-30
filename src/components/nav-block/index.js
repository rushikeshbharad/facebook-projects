// Library imports
import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames/bind';

// Constants import
import { SVG_PATH_WATCHERS } from '../../assets/constants';

// Styles imports
import styles from './styles.css';

const cx = ClassNames.bind(styles);

const NavBlock = ({ projectName, watchers, selected, onSelect }) => {
	return (
		<div
			className={cx('nav-block', selected && 'selected')}
			onClick={onSelect}
		>
			<div className={cx('nav-block-project-name')}>{projectName}</div>
			<div className={cx('nav-block-watchers')}>
				<svg
					className={cx('nav-block-star-svg')}
					width="18"
					height="18"
					role="img"
				>
					<path
						d={SVG_PATH_WATCHERS}
					/>
				</svg>
				<div className={cx('watchers-count')}>{watchers}</div>
			</div>
		</div>
	);
};

NavBlock.propTypes = {
	projectName: PropTypes.string,
	watchers: PropTypes.number,
	selected: PropTypes.bool,
	onSelect: PropTypes.func
};

export default NavBlock;
