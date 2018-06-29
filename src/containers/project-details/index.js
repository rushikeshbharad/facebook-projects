// Library imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames/bind';
import moment from 'moment';

// Import Components
import Contributors from '../../components/contributor';

// Import actions
import { getContributors } from '../../actions';

// I18n import
import { getString } from '../../assets/i18n';

// Styles imports
import styles from './styles.css';

const cx = ClassNames.bind(styles);

class ProjectDetails extends Component {
	static defaultProps = {
		contributors: []
	};

	static propTypes = {
		details: PropTypes.shape({
			full_name: PropTypes.string,
			description: PropTypes.string,
			homepage: PropTypes.string,
			html_url: PropTypes.string,
			contributors: PropTypes.array,
			dispatch: PropTypes.func
		})
	};

	componentDidMount() {
		this.props.dispatch(getContributors(this.props.details.contributors_url));
	}

	render() {
		const { full_name: title, description, homepage, html_url: gitUrl, created_at, updated_at } = this.props.details;

		return (
			<div className={cx('project-details')}>
				<a href={gitUrl} target="_blank" className={cx('project-title')}>{title}</a>
				{description && <span className={cx('project-description')}>{description}</span>}
				{homepage && <a href={homepage} target="_blank" className={cx('project-homepage')}>{homepage}</a>}
				<div className={cx('project-events')}>
					<span className={cx('project-created-at')}>
						{getString('created_at', { date: moment(created_at).format('DD MMM YYYY') })}
					</span>
					<span className={cx('project-created-at')}>
						{getString('updated_at', { date: moment(updated_at).format('DD MMM YYYY') })}
					</span>
				</div>
				<div className={cx('contributors-title')}>{getString('contributors_title', { number: this.props.contributors.length })}</div>
				<div className={cx('contributors')}>
					{this.props.contributors.map(contributor =>
						<Contributors key={`contributor-${contributor.login}`} {...contributor} />
					)}
				</div>
			</div>
		);
	}
}

export default ProjectDetails;
