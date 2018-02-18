import React, { Component } from 'react';
import moment from 'moment';

class Time extends Component {
	state = {
		output: ''
	}

	timer = null

	getDate = () => (
		moment().format('DD.MM.YYYY, HH:mm:ss')
	)

	updateTime = () => {
		this.setState({ output: this.getDate() });
	}

	render () {
		const { output } = this.state;

		return (
			<span>{ output }</span>
		)
	}

	componentDidMount () {
		this.updateTime();

		this.timer = setInterval(
			() => this.updateTime(), 
			1000
		);
	}

	componentWillUnmount () {
		clearInterval(this.timer);
	}
}

export default Time;