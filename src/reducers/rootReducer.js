import {combineReducers} from "redux";
import schoolReducer from './schoolReducer';

import testReducer from "./testReducer";

const rootReducer = combineReducers({
    test : testReducer,
    schools: schoolReducer,
});

export default rootReducer;
