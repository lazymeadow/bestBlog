import * as React from 'react';
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Blog from '../blog/blog';
import Login from '../../components/login/login';
import Navbar from '../../components/nav/navbar';
import Dashboard from '../dashboard/dashboard';

import {thunks as loginThunks} from "../../store/login/actions";


class BlogApp extends React.Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Switch>
                    <Route exact path="/" render={() => <Blog id="1"/>}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/logout" render={this._renderLogout}/>
                    <Route path="/dashboard" component={Dashboard}/>
                    <Route component={NoMatch}/>
                </Switch>
            </div>
        );
    }

    _renderLogout = () => {
        this.props.logout();
        return <Redirect exact to="/"/>;
    };
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.loggedIn
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(loginThunks.logoutThunk())
    };
};

const NoMatch = ({location}) => (
    <div>
        <h3>No match for <code>{location.pathname}</code></h3>
    </div>
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BlogApp));