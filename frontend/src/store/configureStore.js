import {
    createStore,
    applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer.js';
import {createLogger} from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';


export default function configureStore(rootInitialState) {
    return createStore(
        rootReducer,
        rootInitialState,
        composeWithDevTools(
            applyMiddleware(
                createLogger(),
                thunk,
            )
        )
    );

}
