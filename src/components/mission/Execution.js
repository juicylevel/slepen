import React, { Component } from 'react';
import Timer from '../Timer';

class Execution extends Component {
	handleComplete = () => {
		const { onComplete } = this.props;
		const passed = this.timer.passed;

		this.timer.stop();
		onComplete(passed);
	}

	handleCancel = () => {
		const { onCancel } = this.props;

		this.timer.stop();
		onCancel();
	}

	handleTimerStart = () => {
		console.log('timer start');
	}

	handleTimerComplete = () => {
		console.log('timer complete');
	}

	render () {
		const { missionTime } = this.props;
		return (
			<div>
				<h3>Атака!</h3>
				<div>
					<Timer ref={ timer => this.timer = timer } 
						className="time"
						duration={ missionTime } 
						autoStart={ true } 
						onStart={ this.handleTimerStart }
						onComplete={ this.handleTimerComplete }
					/>
				</div>
				<div>
					<button className="big-button green-button" onClick={ this.handleComplete }>Завершить</button>
					<button className="big-button" onClick={ this.handleCancel }>Отмена</button>
				</div>
			</div>
		)
	}
}

export default Execution;