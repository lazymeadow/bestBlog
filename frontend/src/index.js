import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';

import $ from 'jquery';
import Blog from './blog/blog';
import Login from './blog/login/login';
import Dashboard from './dashboard/dashboard';

import './style.less';

$(() => {
    ReactDOM.render(
        (<BrowserRouter>
            <App/>
        </BrowserRouter>),
        document.getElementById('content')
    )
});


const App = () => (<div>
    <nav>
        <Link to="/login">Login</Link>
        <Link to="/">Blog</Link>
        <Route path="/dashboard" render={() => <Link to="/logout">Logout</Link>}/>
    </nav>
    <Switch>
        <Route exact path="/" render={() => <Blog id="1"/>}/>
        <Route path="/login" component={Login}/>
            <Route path="/dashboard" component={Dashboard}/>
        <Route path="/logout" render={() => (
            <div>
                Bye!
            </div>
        )}/>
        <Route component={NoMatch}/>
    </Switch>
</div>);


const NoMatch = ({location}) => (
    <div>
        <h3>No match for <code>{location.pathname}</code></h3>
    </div>
);
