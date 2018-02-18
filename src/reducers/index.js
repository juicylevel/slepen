import { combineReducers } from 'redux';
import mission from './mission';
import duties from './duties';

const rootReducer = combineReducers({
	mission,
	duties
})

export default rootReducer;