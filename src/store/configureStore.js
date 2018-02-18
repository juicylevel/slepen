import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';
import messager from '../middlewares/messager';

const configureStore = (history, initialState) => {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(
            thunk,
            messager,
            routerMiddleware(history)
        )
    )
}

export default configureStore;