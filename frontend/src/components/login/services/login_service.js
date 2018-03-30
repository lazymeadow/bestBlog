import $ from 'jquery';

export default class LoginService {
    static postLogin(username, password) {
        return $.post(`/api/login`, {username: username, password: password});
    }
}