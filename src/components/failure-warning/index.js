// Library imports
import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames/bind';

// Styles import
import styles from './styles.css';

const cx = ClassNames.bind(styles);

const FailureWarning = ({ classNames, text }) => (
	<div className={cx('failure', classNames)}>
		<div className={cx('failure-text')}>{text}</div>
	</div>
);

FailureWarning.propTypes = {
	classNames: PropTypes.string,
	text: PropTypes.string
};

export default FailureWarning;
