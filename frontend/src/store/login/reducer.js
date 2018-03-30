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
            state.loggedIn = true;
            return {...state};
        case LOGOUT:
            state.loggedIn = false;
            return {...state};
        default:
            return state;
    }
}

export default loginReducer;