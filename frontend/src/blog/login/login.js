import * as React from 'react';
import {Redirect} from "react-router-dom";
import LoginService from "./services/login_service";

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            redirectToDashboard: false,
            errorMessage: ''
        };
    }

    render() {
        if (this.state.redirectToDashboard) {
            return (<Redirect to={{
                pathname: '/dashboard'
            }}/>);
        }

        return (<div>
            <label htmlFor="username">Username</label>
            <input id="username" value={this.state.username} onChange={this.changeHandler.bind(this)}/>
            <label htmlFor="password">Password</label>
            <input id="password" type="password" value={this.state.password} onChange={this.changeHandler.bind(this)}/>
            <button type="button" onClick={this.loginHandler.bind(this)}>Login</button>
        </div>);
    }

    changeHandler(event) {
        this.setState({[event.target.id]: event.target.value});
    }

    loginHandler() {
        LoginService.postLogin(this.state.username, this.state.password)
            .then(({data: {success, error}}) => {
                if (success) {
                    this.setState({redirectToDashboard: true});
                }
                else {
                    this.setState({errorMessage: error});
                }
            });
    }
}