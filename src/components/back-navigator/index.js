// Library imports
import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames/bind';

// Library imports
import styles from './styles.css';

const cx  = ClassNames.bind(styles);

const BackNavigator = ({ onClick, classNames }) => (
	<div className={cx('back-navigator', classNames)} onClick={onClick}>
		{'<'}
	</div>
);

BackNavigator.propTypes = {
	onClick: PropTypes.func,
	classNames: PropTypes.string
};

BackNavigator.defaultProps = {
	onClick: () => {}
};

export default BackNavigator;