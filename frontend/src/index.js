import * as React from 'react';
import * as ReactDOM from 'react-dom';
import $ from 'jquery';
import Blog from './blog/blog';

import './style.less';

$(() => {
    ReactDOM.render(
        <Blog id="1" />,
        document.getElementById('content')
    )
});
