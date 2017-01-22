import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {Router, Route, browserHistory, IndexRoute} from "react-router";

import './index.css';
import "semantic-ui-css/semantic.css";

import App from './App';
import SampleComponent from './SampleComponent';
import Compare from './components/compare'


import configureStore from "./store/configureStore";
const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
        	<Route path='/' component={App}>
	        	<IndexRoute component={SampleComponent} />
	        	<Route path='/compare' component={Compare} />
        	</Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
