// Library imports
import React from 'react';
import PropsTypes from 'prop-types';
import ClassNames from 'classnames/bind';

// I18n import
import { getString } from '../../assets/i18n';

// styles imports
import styles from './styles.css';

const cx = ClassNames.bind(styles);

const Contributor = ({ avatarUrl, contributions, htmlUrl, login }) => {
	return (
		<div className={cx('contributor-holder')}>
			<div
				className={cx('contributor-avatar')}
				style={{ backgroundImage: `url(${avatarUrl})` }}
			/>
			<div className={cx('contributor-info')}>
				<a
					href={htmlUrl}
					target="_blank"
					className={cx('contributor-name')}
				>
					{login}
				</a>
				<span className={cx('contributor-contributions')}>
					{getString('number_of_contributions', { number: contributions })}
				</span>
			</div>
		</div>
	);
};

Contributor.propTypes = {
	avatarUrl: PropsTypes.string,
	login: PropsTypes.string,
	contributions: PropsTypes.number,
	html_url: PropsTypes.string
};

export default Contributor;
