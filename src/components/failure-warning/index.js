// Library imports
import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames/bind';

// i18n getter import
import { getString } from '../../assets/i18n'

// Styles import
import styles from './styles.css';

const cx = ClassNames.bind(styles);

const FailureWarning = ({ classNames, text = getString('default_failure_text') }) => (
	<div className={cx('failure', classNames)}>
		<div className={cx('failure-text')}>{text}</div>
	</div>
);

FailureWarning.propTypes = {
	classNames: PropTypes.string,
	text: PropTypes.string
};

export default FailureWarning;
