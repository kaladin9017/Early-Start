import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {Router, Route, browserHistory, IndexRoute} from "react-router";

import "semantic-ui-css/semantic.css";
import 'gsap'

import App from './App';
import SampleComponent from './SampleComponent';

import Compare from './components/compare'
import Welcome from './modals/Welcome';

import Age from './modals/Age';
import Location from './modals/Location';

import Home from './components/Home'



import configureStore from "./store/configureStore";
const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
        	<Route path='/' component={App}>
	        	<IndexRoute components={{
              sample: SampleComponent,
              home: Home
            }} />
	        	<Route path='/compare' component={Compare} />
        	</Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
