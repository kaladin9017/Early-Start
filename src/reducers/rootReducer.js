import {combineReducers} from "redux";
import schoolReducer from './schoolReducer';

import testReducer from "./testReducer";

import userReducer from "./userReducer";

const rootReducer = combineReducers({
    test : testReducer,
    schools: schoolReducer,
    users: userReducer
});

export default rootReducer;
