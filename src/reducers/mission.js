import { random } from 'lodash';
import * as Action from '../constants/Action';
import * as MissionPhase from '../constants/MissionPhase';
import { missions } from '../constants/data';

const initialMission = {
	phase: null,
	missionType: null,
	missionTime: null,
	resultTime: null,
	result: null,
	saving: null
}

const initMission = (state, { missionType }) => {
	const mission = missions[missionType];
	const { timeInterval } = mission;
	const missionTime = random(timeInterval[0], timeInterval[1]) * 1000;
	return {
		...state,
		phase: MissionPhase.INSTRUCTION,
		missionType,
		missionTime
	}
}

const startMission = state => {
	return {
		...state,
		phase: MissionPhase.EXECUTION,
	}
}

const completeMission = (state, { time }) => {
	const result = time <= state.missionTime ? 'success' : 'failure';
	return {
		...state,
		phase: MissionPhase.RESULT,
		resultTime: time,
		saving: 'inprogress',
		result
	}
}

const saveResultSuccess = state => ({
	...state,
	saving: 'completed'
})

const saveResultError = state => ({
	...state,
	saving: 'error'
})

const closeMission = () => initialMission;

const cancelMission = () => initialMission;

const mission = (state = initialMission, { type, payload }) => {
	switch (type) {
		case Action.INIT_MISSION: return initMission(state, payload);
		case Action.START_MISSION: return startMission(state);
		case Action.COMPLETE_MISSION: return completeMission(state, payload);
		case Action.SAVE_RESULT_SUCCESS: return saveResultSuccess(state);
		case Action.SAVE_RESULT_ERROR: return saveResultError(state);
		case Action.CLOSE_MISSION: return closeMission();
		case Action.CANCEL_MISSION: return cancelMission();
		default: return state;
	}
}

export default mission;