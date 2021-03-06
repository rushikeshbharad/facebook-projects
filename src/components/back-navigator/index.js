// Library imports
import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames/bind';

// Library imports
import styles from './styles.css';

// Back symbol import
import { BACK_SYMBOL } from '../../assets/constants';

const cx  = ClassNames.bind(styles);

const BackNavigator = ({ onClick = () => {}, classNames }) => (
	<div className={cx('back-navigator', classNames)} onClick={onClick}>
		{BACK_SYMBOL}
	</div>
);

BackNavigator.propTypes = {
	onClick: PropTypes.func,
	classNames: PropTypes.string
};

export default BackNavigator;
