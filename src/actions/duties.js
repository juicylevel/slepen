import * as Action from '../constants/Action';
import * as api from '../api';
import { DUTIES_PAGE_SIZE } from '../constants/ui';

export const fetchDuties = () => dispatch => {
	dispatch({ type: Action.FETCH_DUTIES })
	console.log('fetchDuties');
	api.firstDuties(DUTIES_PAGE_SIZE).then(data => {
		dispatch({ type: Action.FETCH_DUTIES_SUCCESS, payload: data })
	}).catch(error => {
		dispatch({ type: Action.FETCH_DUTIES_ERROR, error })
	})
}

export const fetchNextDuties = () => dispatch => {
	dispatch({ type: Action.FETCH_DUTIES })
	console.log('fetchNextDuties');
		
	api.nextDuties(DUTIES_PAGE_SIZE).then(data => {
		dispatch({ type: Action.FETCH_NEXT_DUTIES_SUCCESS, payload: data })
	}).catch(error => {
		dispatch({ type: Action.FETCH_DUTIES_ERROR, error })
	})
}

export const deleteDuty = id => dispatch => {
	dispatch({ type: Action.DELETE_DUTY })

	api.deleteDuty(id).then(() => {
		dispatch({ type: Action.DELETE_DUTY_SUCCESS })
		dispatch(fetchDuties());
	}).catch(error => {
		dispatch({ type: Action.DELETE_DUTY_ERROR })
	})
}