import LoginService from "../../components/login/services/login_service";

export const LOGIN = 'login/LOGIN';
export const LOGOUT = 'login/LOGOUT';

function loginAction() {
    return {
        type: LOGIN
    };
}

function logoutAction() {
    return {
        type: LOGOUT
    };
}

function loginThunk({username, password}) {
    return (dispatch) => LoginService.postLogin(username, password)
        .then(({data: {success, error}}) => {
            if (success) {
                dispatch(loginAction());
            }
        });

}


function logoutThunk() {
    return (dispatch) => dispatch(logoutAction());
}

export const thunks = {
    loginThunk,
    logoutThunk
};
