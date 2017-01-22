//REACT IMPORTS
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {Router, Route, browserHistory, IndexRoute} from "react-router";

//LIBRARY IMPORTS
import "semantic-ui-css/semantic.css";
import 'gsap';

//COMPONENT IMPORTS
import App from './App';
import SampleComponent from './SampleComponent';
import Compare from './components/compare'
import Results from './components/results'

//HOMEPAGE IMPORTS
import Home from './components/Home'

//MODAL IMPORTS
import Welcome from './modals/Welcome';
import Age from './modals/Age';
import Location from './modals/Location';

//STORE IMPORTS
import configureStore from "./store/configureStore";
const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
        	<Route path='/' component={App}>
	        	<IndexRoute components={Home} />
	        	<Route path='/results' component={Results} />
	        	<Route path='/compare' component={Compare} />
        	</Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
