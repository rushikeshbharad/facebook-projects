// Library imports
import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames/bind';

// Constants import
import { SVG_PATH_SPINNER } from '../../assets/constants';

// Styles import
import styles from './styles.css';

const cx = ClassNames.bind(styles);

const Spinner = ({ classNames }) => (
  <div className={cx('spinner', classNames)}>
	  <svg
		  width="36px"
		  height="36px"
		  viewBox="0 0 533.333 533.333"
		  className={cx('spinner-svg')}
	  >
		  <path d={SVG_PATH_SPINNER} />
	  </svg>
  </div>
);

Spinner.propTypes = {
	classNames: PropTypes.string
};

export default Spinner;
