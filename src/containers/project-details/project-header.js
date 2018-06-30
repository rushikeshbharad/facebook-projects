// Library imports
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames/bind';
import moment from "moment/moment";

// Constants imports
import { CREATED_AT, UPDATED_AT } from "../../assets/constants";

// I18n import
import { getString } from "../../assets/i18n";

// Styles import
import styles from './styles.css';

const cx = ClassNames.bind(styles);

const ProjectHeader = ({ description, gitUrl, homepage, title, createdAt, updatedAt }) => (
	<Fragment>
		<a href={gitUrl} target="_blank" className={cx('project-title')}>{title}</a>
		{description && <span className={cx('project-description')}>{description}</span>}
		{homepage && <a href={homepage} target="_blank" className={cx('project-homepage')}>{homepage}</a>}
		<div className={cx('project-events')}>
			<span className={cx('project-created-at')}>
				{getString(CREATED_AT, { date: moment(createdAt).format('DD MMM YYYY') })}
			</span>
			<span className={cx('project-updated-at')}>
				{getString(UPDATED_AT, { date: moment(updatedAt).format('DD MMM YYYY') })}
			</span>
		</div>
	</Fragment>
);

ProjectHeader.propTypes = {
	description: PropTypes.string,
	gitUrl: PropTypes.string,
	homepage: PropTypes.string,
	title: PropTypes.string,
	createdAt: PropTypes.string,
	updatedAt: PropTypes.string,
};

export default ProjectHeader;
