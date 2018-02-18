import React, { Component } from 'react';
import { formatTime } from '../utils/date';

class Timer extends Component {
	initialTime = null;
	timer = null;
	downTime = new Date(0);

	state = {
		time: this.downTime
	}

	get passed () {
		return this.now() - this.initialTime;
	}

	now = () => new Date().getTime();

	startTime = () => new Date(this.props.duration);

	updateTime = value => {
		this.setState({ time: value });
	}

	tick = () => {
		const milliseconds = this.props.duration - (this.now() - this.initialTime);
		if (milliseconds <= 0) {
			this.stop();
			this.updateTime(this.downTime);
			this.props.onComplete();
		} else {
			const time = new Date(milliseconds);
			this.updateTime(time);
		}
	}

	start = () => {
		this.reset();
		this.initialTime = this.now();
		this.timer = setInterval(this.tick, 1);
		this.props.onStart();
	}

	stop = () => {
		this.time = null;
		clearInterval(this.timer);
		this.props.onStop();
	}

	reset = () => {
		this.stop();
		this.updateTime(this.startTime());
		this.props.onReset();
	}

	render () {
		const { className } = this.props;
		const { time } = this.state;
    	const output = formatTime(time);
		return (
			<span className={ className }>{ output }</span>
		)
	}

	componentDidMount () {
		this.reset();
		this.props.autoStart && this.start();
	}

	componentWillUnmount () {
		this.reset();
	}
}

Timer.defaultProps = {
	duration: 10000,
	autoStart: false,
	onStart: () => {},
	onStop: () => {},
	onReset: () => {},
	onComplete: () => {}
}

export default Timer;