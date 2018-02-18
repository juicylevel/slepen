import * as Action from '../constants/Action';
import * as api from '../api';
import { createDuty } from '../utils/data';

export const initMission = missionType => ({
	type: Action.INIT_MISSION,
	payload: { missionType } 
})

export const startMission = () => ({
	type: Action.START_MISSION 
})

export const completeMission = time => (dispatch, getState) => {
	dispatch({
		type: Action.COMPLETE_MISSION,
		payload: { time }
	})

	const state = getState();
	const duty = createDuty(state.mission);

	api.saveDuty(duty).then(() => {
		dispatch({ type: Action.SAVE_RESULT_SUCCESS })
	}).catch(error => {
		dispatch({ type: Action.SAVE_RESULT_ERROR })
	})
}

export const closeMission = () => ({
	type: Action.CLOSE_MISSION
})

export const cancelMission = () => ({
	type: Action.CANCEL_MISSION
})