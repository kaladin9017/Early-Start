//REACT IMPORTS
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {Router, Route, browserHistory, IndexRoute} from "react-router";

//STORE IMPORTS
import configureStore from "./store/configureStore";
const store = configureStore();

//LIBRARY IMPORTS
import 'gsap';
import "semantic-ui-css/semantic.css";

//COMPONENT IMPORTS
import App from './App';
import Home from './components/Home'
import SampleComponent from './SampleComponent';
import Results from './components/results'
import Compare from './components/compare'

//MODAL IMPORTS
import Welcome from './modals/Welcome';
import Age from './modals/Age';
import Location from './modals/Location';

//ROUTER
ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
        	<Route path='/' component={App}>
	        	<IndexRoute components={Home} />
                <Route path='/TEST' component={Location} />
	        	<Route path='/results' component={Results} />
	        	<Route path='/compare' component={Compare} />
        	</Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);