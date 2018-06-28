// Library imports
import React, { Component } from 'react';
import ClassNames from 'classnames/bind';

// Styles imports
import styles from './styles.css';

const cx = ClassNames.bind(styles);

class App extends Component {
	render() {
		return (
			<div className={cx('sidebar-navigator-container')}>
				Sidebar Navigation
			</div>
		);
	}
}

export default App;
