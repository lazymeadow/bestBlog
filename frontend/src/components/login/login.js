import * as React from 'react';
import {Redirect, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {thunks as loginThunks} from "../../store/login/actions";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            errorMessage: '',
            redirect: false
        };
    }

    render() {
        if (this.props.loggedIn && this.state.redirect) {
            return (<Redirect to={{
                pathname: '/dashboard'
            }}/>);
        }

        return (<div>
            <label htmlFor="username">Username</label>
            <input id="username" value={this.state.username} onChange={this.changeHandler.bind(this)}/>
            <label htmlFor="password">Password</label>
            <input id="password" type="password" value={this.state.password} onChange={this.changeHandler.bind(this)}/>
            <button type="button" onClick={() => {
                return this.props.login(this.state.username, this.state.password).then(() => this.setState({redirect: true}));
            }}>Login</button>
        </div>);
    }

    changeHandler(event) {
        this.setState({[event.target.id]: event.target.value});
    }
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.login.loggedIn
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: (username, password) => dispatch(loginThunks.loginThunk({username: username, password: password}))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));