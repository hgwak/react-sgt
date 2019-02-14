import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router } from 'react-router-dom'

import App from './components/app';


//this is the only place you need your browser router,
//wrapping the app, will make it available to everything else

ReactDOM.render(
    <Router>
        <App/>
    </Router>,
    document.getElementById('root')
);
