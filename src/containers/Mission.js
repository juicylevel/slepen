import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/mission';
import * as MissionPhase from '../constants/MissionPhase';
import Instruction from '../components/mission/Instruction';
import Execution from '../components/mission/Execution';
import Result from '../components/mission/Result';

class Mission extends Component {
	get missionType () {
		return this.props.match.params.missionType;
	}

	renderInstruction () {
		const { missionType, missionTime, handleStart, handleCancel } = this.props;
		return (
			<Instruction 
				missionType={ missionType } 
				missionTime={ missionTime }  
				onStart={ handleStart } 
				onCancel={ handleCancel } 
			/>
		)
	}

	renderExecution () {
		const { missionTime, handleComplete, handleCancel } = this.props;
		return (
			<Execution 
				missionTime={ missionTime } 
				onComplete={ handleComplete } 
				onCancel={ handleCancel } 
			/>
		)
	}

	renderResult () {
		const { resultTime, handleClose } = this.props;
		return (
			<Result 
				resultTime={ resultTime } 
				onClose={ handleClose } 
			/>
		)
	}

	renderPhase () {
		const { phase } = this.props;
		switch (phase) {
			case MissionPhase.INSTRUCTION: return this.renderInstruction();
			case MissionPhase.EXECUTION: return this.renderExecution();
			case MissionPhase.RESULT: return this.renderResult();
			default: return null;
		}
	}

	render () {
		const phaseComponent = this.renderPhase();
		return (
			<div>
				{ phaseComponent }
			</div>
		)
	}

	componentDidMount () {
		const { handleDidMount } = this.props;
		handleDidMount(this.missionType);
	}
}

export default connect(state => ({
	...state.mission
}), (dispatch, ownProps) => ({
	handleDidMount: missionType => dispatch(actions.initMission(missionType)),
	handleStart: () => dispatch(actions.startMission()),
	handleComplete: time => dispatch(actions.completeMission(time)),
	handleCancel: () => {
		dispatch(actions.cancelMission());
		ownProps.history.goBack();
	},
	handleClose: () => {
		dispatch(actions.closeMission());
		ownProps.history.goBack();
	}
}))(Mission);