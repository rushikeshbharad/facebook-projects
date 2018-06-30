// Library imports
import React, { Fragment } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import ClassNames from 'classnames/bind';

// Component imports
import Contributors from '../../components/contributor';

// Constants imports
import { HTML_URL, LOGIN, AVATAR_URL, CONTRIBUTIONS } from '../../assets/constants';

// I18n import
import { getString } from '../../assets/i18n';

// Styles import
import styles from './styles.css';

const cx = ClassNames.bind(styles);

const ProjectContributors = ({ contributors }) => (
	<Fragment>
		<div className={cx('contributors-title')}>
			{getString('contributors_title', { number: contributors.size })}
		</div>
		<div className={cx('contributors')}>
			{contributors.map(contributor =>
				<Contributors
					key={`contributor-${contributor.get(LOGIN)}`}
					avatarUrl={contributor.get(AVATAR_URL)}
					contributions={contributor.get(CONTRIBUTIONS)}
					htmlUrl={contributor.get(HTML_URL)}
					login={contributor.get(LOGIN)}
				/>
			)}
		</div>
	</Fragment>
);

ProjectContributors.propTypes = {
	contributors: ImmutablePropTypes.listOf(ImmutablePropTypes.map)
};

export default ProjectContributors;
