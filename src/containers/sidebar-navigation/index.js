// Library imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames/bind';

// Component imports
import NavBlock from '../../components/nav-block';

// Styles imports
import styles from './styles.css';

const cx = ClassNames.bind(styles);

class SidebarNavigation extends Component {
	static propTypes = {
		projects: PropTypes.arrayOf(PropTypes.object).isRequired,
		selectedProjectIndex: PropTypes.number.isRequired,
		updateSelectedProjectIndex: PropTypes.func.isRequired
	};

	state = {
		maxHeight: window.innerHeight - 104
	};

	componentDidMount() {
		// Change size of sidebar navigation depending upon screen size
		window.addEventListener('resize', () => {
			if (this.screenResizeDebounce) {
				clearTimeout(this.screenResizeDebounce);
			}
			this.screenResizeDebounce = setTimeout(() => {
				this.setState({
					maxHeight: window.innerHeight - 70
				});
			});
		});
	}

	render() {
		return (
			<div className={cx('sidebar-navigator-container')} style={{ maxHeight: this.state.maxHeight }}>
				{this.props.projects.map((project, i) =>
					<NavBlock
						key={`nav-block-${i}`}
						projectName={project.name}
						watchers={project.watchers}
						selected={this.props.selectedProjectIndex === i}
						onSelect={() => {
							this.props.updateSelectedProjectIndex(i);
						}}
					/>
				)}
			</div>
		);
	}
}

export default SidebarNavigation;
