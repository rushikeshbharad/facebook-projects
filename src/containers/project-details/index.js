// Library imports
import React, { Component } from 'react';
import ClassNames from 'classnames/bind';

// Styles imports
import styles from './styles.css';

const cx = ClassNames.bind(styles);

class ProjectDetails extends Component {
	render() {
		console.log('projectDetails => ', this.props.details);
		const { name: title, description, homepage, html_url: gitUrl } = this.props.details;

		return (
			<div className={cx('project-details')}>
				<a href={gitUrl} target="_blank" className={cx('project-title')}>{title}</a>
				<span className={cx('project-description')}>{description}</span>
				<a href={homepage} target="_blank" className={cx('project-homepage')}>{homepage}</a>
			</div>
		);
	}
}

export default ProjectDetails;
