import * as Action from '../constants/Action';

const initialDuties = {
	items: null,
	total: null,
	hasNext: false,
	loading: false
}

const hasNext = (items, total) => (
	items && items.length < total
)

const feedData = (state, items, total) => ({
	...state,
	items: items,
	total,
	hasNext: hasNext(items, total),
	loading: false
})

const fetchDuties = state => ({
	...state,
	loading: true
})

const fetchDutiesSuccess = (state, { items, total }) => (
	feedData(state, items, total)
)

const fetchNextDutiesSuccess = (state, { items, total }) => (
	feedData(
		state, 
		[ ...state.items, ...items ], 
		total
	)
)

const fetchDutiesError = state => ({
	...state,
	loading: false
})

const duties = (state = initialDuties, { type, payload }) => {
	switch (type) {
		case Action.FETCH_DUTIES: return fetchDuties(state, payload);
		case Action.FETCH_DUTIES_SUCCESS: return fetchDutiesSuccess(state, payload);
		case Action.FETCH_NEXT_DUTIES_SUCCESS: return fetchNextDutiesSuccess(state, payload);
		case Action.FETCH_DUTIES_ERROR: return fetchDutiesError(state, payload);
		// TODO
		// case Action.DELETE_DUTY: return ;
		// case Action.DELETE_DUTY_SUCCESS: return ;
		// case Action.DELETE_DUTY_ERROR: return ;
		default: return state;
	}
}

export default duties;