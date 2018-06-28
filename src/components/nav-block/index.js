// Library imports
import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames/bind';

// Styles imports
import styles from './styles.css';

const cx = ClassNames.bind(styles);

const NavBlock = ({ projectName, selected, onSelect }) => {
	return (
		<div
			className={cx('nav-block', selected)}
			onClick={onSelect}
		>
			{projectName}
		</div>
	);
};

NavBlock.propTypes = {
	projectName: PropTypes.string,
	selected: PropTypes.bool,
	onSelect: PropTypes.func
};

export default NavBlock;
