// Library imports
import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames/bind';

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
						d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"
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
