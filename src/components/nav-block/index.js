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
					<path d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z" />
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
