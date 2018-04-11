import {
    LOGIN,
    LOGOUT
} from './actions';
const initialState = {
    loggedIn: false
};

function loginReducer(state = initialState, action) {
    switch(action.type) {
        case LOGIN:
            return {...state, loggedIn: true};
        case LOGOUT:
            return {...state, loggedIn: false};
        default:
            return state;
    }
}

export default loginReducer;