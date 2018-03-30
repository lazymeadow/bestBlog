import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {BrowserRouter, Link, Route, Switch, Redirect} from 'react-router-dom';
import {Provider, connect} from 'react-redux';

import $ from 'jquery';
import Blog from './containers/blog/blog';
import Login from './components/login/login';
import Dashboard from './containers/dashboard/dashboard';

import './style.less';
import BlogApp from "./containers/blogApp/blogApp";
import configureStore from "./store/configureStore";
import {thunks as loginThunks} from "./store/login/actions";


const store = configureStore({
    blog: {},
    loggedIn: false
});


$(() => {
    ReactDOM.render(
        (
            <Provider store={store}>
                <BrowserRouter>
                    <BlogApp/>
                </BrowserRouter>
            </Provider>
        ),
        document.getElementById('content')
    )
});
